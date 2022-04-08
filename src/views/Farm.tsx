import React from "react";
import { CreateFarm, CreateFarmButton } from "@cryption/dapp-factory-sdk";
import "./Farm.css";

const Farm = () => {
  return (
    <>
      <CreateFarmButton
        title="Create new Farm"
        customGradient="linear-gradient(to right, red, yellow)"
      />
      <CreateFarm customGradient="linear-gradient(to right, red, yellow)" />
    </>
  );
};
export default Farm;
