import random from "lodash/random";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { TorusConnector } from "@web3-react/torus-connector";

const SUPPORTED_NETWORK_IDS = [137, 80001, 1, 5];

const nodes = {
  "137": [
    "https://polygon-mainnet.g.alchemy.com/v2/FBzG3f40d2eunLwaWhKZ0h0I38nnltC7",
  ],
  "80001": [
    "https://polygon-mumbai.g.alchemy.com/v2/FTbhFEHlJbgxwf0U0DQtTDqbANNhfuc1",
  ],
};

const getNodeUrl = () => {
  const chainId = "80001";
  const nodesData = nodes[chainId];
  const randomIndex = random(0, nodesData.length - 1);
  return nodesData[randomIndex];
};

const rpcUrl = getNodeUrl();
// const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10);

// eslint-disable-next-line func-names
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const injected = new InjectedConnector({
    supportedChainIds: SUPPORTED_NETWORK_IDS,
  });

  const walletConnectConnector = new WalletConnectConnector({
    rpc: { [SUPPORTED_NETWORK_IDS[0]]: rpcUrl },
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
  });

  const torusInitParams = {
    network: {
      host: process.env.REACT_APP_CHAIN_NAME,
      chainId: SUPPORTED_NETWORK_IDS[0],
    },
  };

  const torusGoogleConnector = new TorusConnector({
    chainId: SUPPORTED_NETWORK_IDS[0],
    initOptions: torusInitParams,
    loginOptions: {
      verifier: "google",
    },
  });
  const torusFacebookConnector = new TorusConnector({
    chainId: SUPPORTED_NETWORK_IDS[0],
    initOptions: torusInitParams,
    loginOptions: {
      verifier: "facebook",
    },
  });
  const torusDiscordConnector = new TorusConnector({
    chainId: SUPPORTED_NETWORK_IDS[0],
    initOptions: torusInitParams,
    loginOptions: {
      verifier: "discord",
    },
  });

  const torusTwitterConnector = new TorusConnector({
    chainId: SUPPORTED_NETWORK_IDS[0],
    initOptions: torusInitParams,
    loginOptions: {
      verifier: "torus-auth0-twitter",
    },
  });

  const torusRedditConnector = new TorusConnector({
    chainId: SUPPORTED_NETWORK_IDS[0],
    initOptions: torusInitParams,
    loginOptions: {
      verifier: "reddit",
    },
  });

  const torusEmailConnector = new TorusConnector({
    chainId: SUPPORTED_NETWORK_IDS[0],
    initOptions: {
      ...torusInitParams,
      ...{
        whiteLabel: {
          theme: {
            isDark: true,
            colors: {
              torusBrand1: "#2082e9",
            },
          },
        },
        enabledVerifiers: {
          google: false,
          facebook: false,
          discord: false,
          twitch: false,
          reddit: false,
          "torus-auth0-twitter": false,
        },
      },
    },
  });

  return {
    injected,
    walletConnectConnector,
    torusDiscordConnector,
    torusEmailConnector,
    torusFacebookConnector,
    torusGoogleConnector,
    torusRedditConnector,
    torusTwitterConnector,
  };
}
