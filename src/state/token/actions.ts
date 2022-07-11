import { createAction } from "@reduxjs/toolkit";

export const setLoading = createAction<{
  isLoading: boolean;
}>("token/setLoading");

export const setTokenDetails = createAction<{
  tokenPrice: number;
  marketCap: number;
  circulateSupply: number;
  treasuryBalance: number;
  insuranceBalance: number;
  totalPairLiquidity: number;
  stakingAPY: number;
  lastRewardTime: number;
}>("token/setTokenDetails");

export const setTokenBalance = createAction<{
  tokenBalance: number;
}>("token/setTokenBalance");

