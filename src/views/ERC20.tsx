import React from "react";
import { CreateERC20, CreateERC20Button } from "@cryption/dapp-factory-sdk";

const ERC20 = () => {
  return (
    <>
      <CreateERC20Button />
      <CreateERC20 customGradient="linear-gradient(to right, red, yellow)" />
    </>
  );
};
export default ERC20;
