import React from "react";
import { CreateFarm, CreateFarmButton } from "@cryption/dapp-factory-sdk";
import "./Farm.css";

const Farm = () => {
  return (
    <>
      <CreateFarmButton title="Karan U Kanthawar" />
      <CreateFarm />
    </>
  );
};
export default Farm;
