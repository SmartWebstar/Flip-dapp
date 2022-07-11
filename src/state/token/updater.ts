import { setTokenDetails, setTokenBalance, setLoading } from "./actions";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProvider } from "utils/provider";
import LanunaContractAddr from "config/LanunaContractAddr";
import { useContract } from "hooks/useContract";
import { getTokenPrice, loadTokenPrices } from "utils/getTokenPrice";
import { ethers, BigNumber } from "ethers";
import LANUNA_TOKEN_ABI from "abi/LanunaTokenContract.json";
import ERC20_ABI from "abi/erc20.json";
import { useWeb3 } from "state/web3";
import { SupportedChainId } from "config/network";

export default function Updater(): null {
  const dispatch = useDispatch();

  const LanunaProvider = getProvider(LanunaContractAddr.chainId);
  const tokenContract = useContract(
    LanunaProvider,
    LanunaContractAddr.chainId,
    LanunaContractAddr.address,
    LANUNA_TOKEN_ABI
  );
  const BNBAddress = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";
  const BNBcontract = useContract(
    LanunaProvider,
    LanunaContractAddr.chainId,
    BNBAddress,
    ERC20_ABI
  );

  useEffect(() => {
    // Get Token Details
    const getTokenDetails = async () => {
      if (tokenContract && LanunaProvider && BNBcontract) {
        dispatch(
          setLoading({
            isLoading: true,
          })
        );
        await loadTokenPrices(
          LanunaContractAddr.address,
          LanunaContractAddr.networkName
        );
        await loadTokenPrices(BNBAddress, LanunaContractAddr.networkName);
        const tokenPrice = getTokenPrice(LanunaContractAddr.address);
        const BNBPrice = getTokenPrice(BNBAddress);
        const totalSupply = await tokenContract._totalSupply();
        const circulate = await tokenContract.getCirculatingSupply();
        const treasuryAddress = await tokenContract.treasuryReceiver();
        const pairContractAddress = await tokenContract.pairContract();
        const lastRewardTime = await tokenContract._lastRebasedTime();
        const marketCap = totalSupply.toNumber() * tokenPrice;
        const circulateSupply = circulate.toNumber();
        const treasury = await LanunaProvider.getBalance(treasuryAddress);
        const treasuryBalance =
          Number(ethers.utils.formatEther(treasury)) * BNBPrice;
        const pairContractBalance = await BNBcontract.balanceOf(
          pairContractAddress
        );
        const totalPairLiquidity =
          Number(ethers.utils.formatEther(pairContractBalance)) * BNBPrice;

        // Calculate staking reward

        const rewardYield = 1120 / Math.pow(10, 7);
        // const rewardYield = 41667 / Math.pow(10, 8);
        // const stakingAPY = Math.pow(1 + rewardYield, 365 * 48) - 1;
        const stakingAPY = Math.pow(1 + rewardYield, 365 * 240) - 1;
        dispatch(
          setTokenDetails({
            tokenPrice,
            marketCap,
            circulateSupply,
            treasuryBalance,
            insuranceBalance: 0,
            totalPairLiquidity,
            stakingAPY,
            lastRewardTime: lastRewardTime.toNumber(),
          })
        );
        dispatch(
          setLoading({
            isLoading: false,
          })
        );
      }
    };
    getTokenDetails();
  }, [BNBcontract, tokenContract, dispatch, LanunaProvider]);

  const { account, chainId } = useWeb3();

  useEffect(() => {
    if (account && tokenContract && chainId === SupportedChainId.MAINNET) {
      const getBalance = async () => {
        dispatch(
          setLoading({
            isLoading: true,
          })
        );
        const tokenBalance = await tokenContract.balanceOf(account);
        if (tokenBalance !== "")
          dispatch(
            setTokenBalance({
              tokenBalance:
                Number(tokenBalance) / Math.pow(10, LanunaContractAddr.decimal),
            })
          );
        dispatch(
          setLoading({
            isLoading: false,
          })
        );
      };
      getBalance();
    }
  }, [tokenContract, account, chainId, dispatch]);

  return null;
}
