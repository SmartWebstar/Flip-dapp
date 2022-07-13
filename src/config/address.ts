export enum SupportedChainId {
  MAINNET = 56,
  TESTNET = 97,
  HEX_MAINNET = "0x38",
  HEX_TESTNET = "0x61",
}

type AddressMap = { [chainId: number]: string };

export const FLIP_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: "",
  [SupportedChainId.TESTNET]: "0x055C6E9cbD812Aa5bB0Aad4CC9Be4e7A38A12ca9",
};
