import React, { useState } from "react";
import {
  CreateLiquidityLocker,
  CreateLiquidityLockerButton, DisplayLiquidityLockers, LiquidityLockerPage
} from "@cryption/dapp-factory-sdk";
import { useActiveWeb3React } from "../hooks";

const LiquidityLocker = () => {
  const [singleLockerId, setSingleLockerId] = useState("");

  const {account, chainId} = useActiveWeb3React();

  const getServiceId = (id: string) => {
    setSingleLockerId(() => id);
  }

  return (
    <>
      <CreateLiquidityLockerButton />
      <CreateLiquidityLocker customGradient="linear-gradient(to right, yellow, red)" />
      <DisplayLiquidityLockers chainId={chainId} account={account || ""} getServiceId={getServiceId}  />
      {singleLockerId !== "" && (<LiquidityLockerPage chainId={chainId || 80001} id={singleLockerId} />) }
    </>
  );
};
export default LiquidityLocker;
