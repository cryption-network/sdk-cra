function getLibraryEthers(provider: any) {
  console.log({ provider });
  // const libraryEther = new Web3Provider(provider);
  // libraryEther.pollingInterval = 15000;
  // console.log({ libraryEther });
  // return libraryEther;
  return provider;
}

export default getLibraryEthers;
