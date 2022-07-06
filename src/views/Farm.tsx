import React, {useState} from "react";
import { CreateFarm, CreateFarmButton, DisplayFarms, FarmPage } from "@cryption/dapp-factory-sdk";
import "./Farm.css";
import { useActiveWeb3React } from "../hooks";

const Farm = () => {
  const [singleFarmId, setSingleFarmId] = useState("");

  const {account, chainId} = useActiveWeb3React();

  const getServiceId = (id: string) => {
   setSingleFarmId(() => id);
  }

  return (
    <>
      <CreateFarmButton
        title="Create new Farm"
        customgradient="linear-gradient(to right, #f2f 25%, #0275d8 75%)"
      />
      <CreateFarm customgradient="linear-gradient(to right, #f2f 25%, #0275d8 75%)" />
      <DisplayFarms chainId={chainId|| 80001} account={account || ""} getServiceId={getServiceId}  />
      {singleFarmId !== "" && (<FarmPage chainId={chainId} id={singleFarmId} />) }
    </>
  );
};
export default Farm;
