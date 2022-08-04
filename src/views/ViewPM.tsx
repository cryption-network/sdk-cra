import { useParams } from "react-router-dom";
import { useActiveWeb3React } from "../hooks";
import { PredictionMarketPage } from "@cryption/dapp-factory-sdk";
import { useEffect, useState } from "react";
import Web3 from "web3";
import erc20Abi from "../config/erc20.json";

export default function ViewPM() {
  const [tokenDetails, setTokenDetails] = useState<any>(null);

  const { market, token: tokenAddress, oracle } = useParams<{ market: string, token: string, oracle: string }>();
  const {  library } = useActiveWeb3React();

  const getTokenDetails = async () => {
    if (library && market) {
      // @ts-ignore
      const web3 = new Web3(library);
      // @ts-ignore
      const tokenContract = new web3.eth.Contract(erc20Abi, tokenAddress);
      const decimals = await tokenContract.methods.decimals().call();
      const symbol = await tokenContract.methods.symbol().call();
      setTokenDetails({
        address: tokenAddress?.toString(),
        symbol: symbol.toString(),
        decimals: decimals.toString()
      });
    }
  };

  useEffect(() => {
    getTokenDetails().catch(e => console.log("error while fetching token details: ", e));
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
