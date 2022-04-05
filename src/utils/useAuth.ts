import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import { ConnectorNames } from "cryption-uikit-v2";
import { connectorsByName } from "../utils/web3React";

const useAuth = () => {
  const { activate, deactivate } = useWeb3React();
  // const { toastError } = useToast();

  const login = useCallback((connectorID: ConnectorNames) => {
    const connector = connectorsByName[connectorID];
    if (connector) {
      activate(connector, async (error: Error) => {
        console.error(error.name, error.message);
      });
    } else {
      console.error("Can't find connector", "The connector config is wrong");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    login,
    logout: deactivate,
  };
};

export default useAuth;
