import React, { useState } from "react";
import {
  CreatePredictionMarket, CreatePredictionMarketButton, DisplayPredictionMarkets
} from "@cryption/dapp-factory-sdk";
import { Text } from "cryption-uikit-v2";

const PredictionMarkets = () => {
  const [singlePredictionMarket, setSinglePredictionMarket] = useState("");

  const getServiceId = (id: string) => {
    setSinglePredictionMarket(() => id);
  }

  return (
    <>
      <CreatePredictionMarketButton />
      <CreatePredictionMarket customgradient="linear-gradient(to right, red, yellow)" />
      {singlePredictionMarket !== "" && (<Text>{singlePredictionMarket}</Text>) }
      <DisplayPredictionMarkets arrOfKeyValuePairs={[]} getServiceId={getServiceId} />
    </>
  );
};

export default PredictionMarkets ;
