import { useParams } from "react-router-dom";
import { useActiveWeb3React } from "../hooks";
import { PredictionMarketPage } from "@cryption/dapp-factory-sdk";
import { useEffect, useState } from "react";
import Web3 from "web3";
import erc20Abi from "../config/erc20.json";
import { NATIVE_TOKEN_DETAILS } from "../config";

export default function ViewPM() {
  const [tokenDetails, setTokenDetails] = useState<any>(null);

  const { market, token: tokenAddress, oracle } = useParams<{ market: string, token: string, oracle: string }>();
  const { library, chainId } = useActiveWeb3React();

  const getTokenDetails = async (tokenAddress: string) => {
    if (library && market && chainId) {
      if (tokenAddress === "0x0000000000000000000000000000000000000000" || tokenAddress.toString().toLowerCase() === "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee") {
        try{
          // @ts-ignore
          const getSymbol = NATIVE_TOKEN_DETAILS[chainId].symbol;
          // @ts-ignore
          const getDecimals = NATIVE_TOKEN_DETAILS[chainId].decimal;
        setTokenDetails({
          address: tokenAddress?.toString(),
          symbol: getSymbol,
          decimals: getDecimals
        });
        } catch (error) {
          console.error("Couldn't set from input tokens");
          setTokenDetails({
            address: tokenAddress?.toString(),
            symbol: "MATIC",
            decimals: 18
          });
        }

        return 0;
      }
      // @ts-ignore
      const web3 = new Web3(library);
      // @ts-ignore
      const tokenContract = new web3.eth.Contract(erc20Abi, tokenAddress);
      const decimals = await tokenContract.methods.decimals().call();
      const symbol = await tokenContract.methods.symbol().call();
      setTokenDetails({
        address: tokenAddress?.toString(),
        symbol: symbol.toString(),
        decimals: Number(decimals)
      });

      return 0;
    }
  };

  useEffect(() => {
    if (tokenAddress) {
      getTokenDetails(tokenAddress).catch(e => console.log("error while fetching token details: ", e));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (tokenDetails && market && oracle) {
    return (
      <PredictionMarketPage
        token={tokenDetails}
        predictionAddress={market}
        chainlinkOracleAddress={oracle}
      />
    );
  }
  return <></>;
}
