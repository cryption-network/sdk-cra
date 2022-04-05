import React from "react";
import Web3 from "web3";
import { Web3ReactProvider, createWeb3ReactRoot } from "@web3-react/core";
import { Provider } from "react-redux";
import { ThemeContextProvider } from "./ThemeContext";
import store from "./store";
import getLibraryEther from "./utils/getLibraryEther";

const Web3ProviderNetwork = createWeb3ReactRoot("NETWORK");
// @ts-ignore
const getLibrary = (provider): Web3 => {
  return provider;
};

const Web3Provider = createWeb3ReactRoot("web3");

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibraryEther}>
      <Web3Provider getLibrary={getLibrary}>
        <Web3ProviderNetwork getLibrary={getLibraryEther}>
          <Provider store={store}>
            <ThemeContextProvider>{children}</ThemeContextProvider>
          </Provider>
        </Web3ProviderNetwork>
      </Web3Provider>
    </Web3ReactProvider>
  );
};

export default Providers;
