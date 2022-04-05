import React from "react";
import { CreateNFT, CreateNFTButton } from "@cryption/dapp-factory-sdk";

const NFT = () => {
  return (
    <>
      <CreateNFTButton />
      <CreateNFT />
    </>
  );
};
export default NFT;
