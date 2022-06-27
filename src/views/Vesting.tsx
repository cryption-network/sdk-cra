import React, { useState } from "react";
import { CreateVesting, CreateVestingButton, DisplayVestings, VestingPage } from "@cryption/dapp-factory-sdk";
import { useActiveWeb3React } from "../hooks";

const Vesting = () => {
  const [singleVestingId, setSingleVestingId] = useState("");

  const {account} = useActiveWeb3React();

  const getServiceId = (id: string) => {
    setSingleVestingId(() => id);
  }

  return (
    <>
      <CreateVestingButton />
      <CreateVesting customGradient="linear-gradient(to right, red, yellow)" />
      <DisplayVestings account={account || ""} getServiceId={getServiceId} />
      {singleVestingId !== "" && (<VestingPage id={singleVestingId} account={account || ""} />) }
    </>
  );
};
export default Vesting;
