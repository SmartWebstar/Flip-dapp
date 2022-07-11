import { useSelector } from "react-redux";
import { AppState } from "store";

export function useTokenDetails() {
  return useSelector((state: AppState) => state.token);
}

export function useTokenBalance() {
  return useSelector((state: AppState) => state.token.tokenBalance);
}
