import React from "react";
import { CreateFarm, CreateFarmButton } from "@cryption/dapp-factory-sdk";
import "./Farm.css";

const Farm = () => {
  return (
    <>
      <CreateFarmButton
        title="Create new Farm"
        customGradient="linear-gradient(to right, #fff 25%, #0275d8 75%)"
      />
      <CreateFarm customGradient="linear-gradient(to right, #fff 25%, #0275d8 75%)" />
    </>
  );
};
export default Farm;
