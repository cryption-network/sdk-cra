import React from "react";
import { CreateERC20, CreateERC20Button, DisplayERC20Tokens } from "@cryption/dapp-factory-sdk";

const ERC20 = () => {
  return (
    <>
      <CreateERC20Button />
      <CreateERC20 customgradient="linear-gradient(to right, #f2f 25%, #0275d8 75%)" />
      <DisplayERC20Tokens />
    </>
  );
};
export default ERC20;
