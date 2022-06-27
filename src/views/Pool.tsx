import React, { useState } from "react";
import { CreatePool, CreatePoolButton, DisplayPools,  PoolPage } from "@cryption/dapp-factory-sdk";
import { useActiveWeb3React } from "../hooks";

const Pool = () => {
  const [singlePoolId, setSinglePoolId] = useState("");

  const {chainId, account} = useActiveWeb3React();

  const getServiceId = (id: string) => {
    setSinglePoolId(() => id);
  }

  return (
    <>
      <CreatePoolButton />
      <CreatePool />
      <DisplayPools chainId={chainId} account={account || ""} getServiceId={getServiceId} />
      {singlePoolId !== "" && (<PoolPage chainId={chainId} id={singlePoolId}  />) }
    </>
  );
};
export default Pool;
