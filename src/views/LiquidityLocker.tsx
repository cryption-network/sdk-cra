import React from "react";
import {
  CreateLiquidityLocker,
  CreateLiquidityLockerButton,
} from "@cryption/dapp-factory-sdk";

const LiquidityLocker = () => {
  return (
    <>
      <CreateLiquidityLockerButton />
      <CreateLiquidityLocker customGradient="linear-gradient(to right, yellow, red)" />
    </>
  );
};
export default LiquidityLocker;
