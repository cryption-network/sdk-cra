import React from "react";
import {
  CreateLiquidityLocker,
  CreateLiquidityLockerButton,
} from "@cryption/dapp-factory-sdk";

const LiquidityLocker = () => {
  return (
    <>
      <CreateLiquidityLockerButton />
      <CreateLiquidityLocker />
    </>
  );
};
export default LiquidityLocker;
