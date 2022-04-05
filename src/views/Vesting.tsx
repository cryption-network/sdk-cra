import React from "react";
import { CreateVesting, CreateVestingButton } from "@cryption/dapp-factory-sdk";

const Vesting = () => {
  return (
    <>
      <CreateVestingButton />
      <CreateVesting />
    </>
  );
};
export default Vesting;
