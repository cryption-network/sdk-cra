import React from "react";
import {
  CreatePredictionMarket, CreatePredictionMarketButton, DisplayPredictionMarkets
} from "@cryption/dapp-factory-sdk";
import { useNavigate } from "react-router-dom";

const PredictionMarkets = () => {
  const navigate = useNavigate();

  const getServiceId = (market: string, token :string, oracle: string) => {
    if (market && token && oracle) {
      navigate(`/pm/${market}/${token}/${oracle}`);
    }
  };

  return (
    <>
      <CreatePredictionMarketButton />
      <CreatePredictionMarket customgradient="linear-gradient(to right, red, yellow)" />
      <DisplayPredictionMarkets arrOfKeyValuePairs={[]} getServiceId={getServiceId} />
    </>
  );
};

export default PredictionMarkets;
