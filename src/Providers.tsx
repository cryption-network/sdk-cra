import React from "react";
import { Web3ReactProvider, createWeb3ReactRoot } from "@web3-react/core";
import { Provider } from "react-redux";
import { ThemeContextProvider } from "./ThemeContext";
import store from "./store";
import getLibraryEthers from "./utils/getLibraryEthers";

const Web3ProviderNetwork = createWeb3ReactRoot("NETWORK");

const Web3Provider = createWeb3ReactRoot("web3");

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibraryEthers}>
      <Web3Provider getLibrary={getLibraryEthers}>
        <Web3ProviderNetwork getLibrary={getLibraryEthers}>
          <Provider store={store}>
            <ThemeContextProvider>{children}</ThemeContextProvider>
          </Provider>
        </Web3ProviderNetwork>
      </Web3Provider>
    </Web3ReactProvider>
  );
};

export default Providers;
