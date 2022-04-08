import React from "react";
import { CreateVesting, CreateVestingButton } from "@cryption/dapp-factory-sdk";

const Vesting = () => {
  return (
    <>
      <CreateVestingButton />
      <CreateVesting customGradient="linear-gradient(to right, red, yellow)" />
    </>
  );
};
export default Vesting;
