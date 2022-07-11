import { createReducer } from "@reduxjs/toolkit";
import { setTokenBalance, setTokenDetails, setLoading } from "./actions";

export interface TokenState {
  isLoading: boolean;
  tokenPrice: number;
  marketCap: number;
  circulateSupply: number;
  treasuryBalance: number;
  insuranceBalance: number;
  totalPairLiquidity: number;
  tokenBalance: number;
  stakingAPY: number;
  lastRewardTime: number;
}

const initialState: TokenState = {
  isLoading: false,
  tokenPrice: 0,
  marketCap: 0,
  circulateSupply: 0,
  treasuryBalance: 0,
  insuranceBalance: 0,
  totalPairLiquidity: 0,
  tokenBalance: 0,
  stakingAPY: 0,
  lastRewardTime: 0,
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(setLoading, (state, action) => {
      const { isLoading } = action.payload;
      state.isLoading = isLoading;
    })
    .addCase(setTokenDetails, (state, action) => {
      const {
        tokenPrice,
        marketCap,
        circulateSupply,
        treasuryBalance,
        insuranceBalance,
        totalPairLiquidity,
        stakingAPY,
        lastRewardTime,
      } = action.payload;
      state.tokenPrice = tokenPrice;
      state.marketCap = marketCap;
      state.circulateSupply = circulateSupply;
      state.treasuryBalance = treasuryBalance;
      state.insuranceBalance = insuranceBalance;
      state.totalPairLiquidity = totalPairLiquidity;
      state.stakingAPY = stakingAPY;
      state.lastRewardTime = lastRewardTime;
    })
    .addCase(setTokenBalance, (state, action) => {
      const { tokenBalance } = action.payload;
      state.tokenBalance = tokenBalance;
    })
);
