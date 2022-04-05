import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React as useWeb3ReactCore } from "@web3-react/core";
// eslint-disable-next-line import/no-unresolved
import { Web3ReactContextInterface } from "@web3-react/core/dist/types";

const NetworkContextName = "NETWORK";

export function useActiveWeb3React(): Web3ReactContextInterface<Web3Provider> & {
  chainId?: any;
} {
  const context = useWeb3ReactCore<Web3Provider>();
  const contextNetwork = useWeb3ReactCore<Web3Provider>(NetworkContextName);

  return context.active ? context : contextNetwork;
}
