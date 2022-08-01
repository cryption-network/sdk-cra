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
    address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    symbol: "BNB",
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
      predictionAddress="0x18B2A687610328590Bc8F2e5fEdDe3b582A49cdA"
      chainlinkOracleAddress="0xD276fCF34D54A926773c399eBAa772C12ec394aC"
    />
    </>
  );
};

export default PredictionMarkets ;
