import React from "react";
import { CreateERC20, CreateERC20Button } from "@cryption/dapp-factory-sdk";

const ERC20 = () => {
  return (
    <>
      <CreateERC20Button />
      <CreateERC20 customGradient="linear-gradient(to right, #f2f 25%, #0275d8 75%)" />
    </>
  );
};
export default ERC20;
