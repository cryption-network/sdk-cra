import { Web3Provider } from "@ethersproject/providers";

export default function getLibraryEther(provider: any): Web3Provider {
  const libraryEther = new Web3Provider(provider);
  libraryEther.pollingInterval = 15000;
  return libraryEther;
}
