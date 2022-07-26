import React, { useState } from "react";
import {
  CreatePredictionMarket, CreatePredictionMarketButton, DisplayPredictionMarkets, PredictionMarketPage
} from "@cryption/dapp-factory-sdk";
import { Text } from "cryption-uikit-v2";

const PredictionMarkets = () => {
  const [singlePredictionMarket, setSinglePredictionMarket] = useState("");

  const getServiceId = (id: string) => {
    setSinglePredictionMarket(() => id);
  }

  const token = {
    address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
    symbol: "CAKE",
    decimals: 18,
  };

  return (
    <>
      <CreatePredictionMarketButton />
      <CreatePredictionMarket customgradient="linear-gradient(to right, red, yellow)" />
      {singlePredictionMarket !== "" && (<Text>{singlePredictionMarket}</Text>) }
      <DisplayPredictionMarkets arrOfKeyValuePairs={[]} getServiceId={getServiceId} />
      <PredictionMarketPage
       token={token}
      predictionAddress="0x0E3A8078EDD2021dadcdE733C6b4a86E51EE8f07"
      chainlinkOracleAddress="0xB6064eD41d4f67e353768aA239cA86f4F73665a1"
    />
    </>
  );
};

export default PredictionMarkets ;
