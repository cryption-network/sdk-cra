import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { DappFactoryProvider } from "@cryption/dapp-factory-sdk";
import { useActiveWeb3React } from "./hooks";
import Providers from "./Providers";
import App from "./App";
import { ThemeContext } from "./ThemeContext";

declare const window: any;

if ("ethereum" in window) {
  (window && (window.ethereum as any)).autoRefreshOnNetworkChange = false;
}

function DappFactory({ children }: { children?: React.ReactNode }) {
  const { library, chainId, account } = useActiveWeb3React();
  const { isDark } = useContext(ThemeContext);
  const accountString = account ? account : "";

  return (
    <DappFactoryProvider
      provider={library}
      chainId={chainId}
      account={accountString}
      useDarkMode={isDark}
    >
      {children}
    </DappFactoryProvider>
  );
}

window.addEventListener("error", () => {
  localStorage?.removeItem("redux_localstorage_simple_lists");
});
ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <DappFactory>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DappFactory>
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
