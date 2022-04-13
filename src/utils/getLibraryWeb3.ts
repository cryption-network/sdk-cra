import Web3 from "web3";

const getLibraryWeb3 = (provider: any): Web3 => {
  console.log({ provider });
  return provider;
};

export default getLibraryWeb3;
