import { HttpLink, from, split } from "@apollo/client";
import { RetryLink } from "@apollo/client/link/retry";
import { DEFAULT_CHAIN_ID } from "../config";

const testNetLink = {
  stakingpool:
    "https://api.thegraph.com/subgraphs/name/gulshanvas/stakingpoolmumbaidynamic",
};
const mainNetLink = {
  stakingpool:
    "https://api.thegraph.com/subgraphs/name/gulshancryption/stakingpool-matic",
};
const bscMainNetLink = {
  stakingpool:
    "https://api.thegraph.com/subgraphs/name/gulshancryption/stakingpool-bsc",
};
const bscTestNetLink = {
  stakingpool:
    "https://api.thegraph.com/subgraphs/name/gulshancryption/stakingpool-bsc",
};

const graphLinks = {
  80001: testNetLink,
  137: mainNetLink,
  1: mainNetLink,
  56: bscMainNetLink,
  97: bscTestNetLink,
};

let chainId: number = DEFAULT_CHAIN_ID;

if (window && window.ethereum) {
  chainId = window.ethereum.networkVersion;
}

if (chainId === null || chainId === undefined) {
  chainId = DEFAULT_CHAIN_ID;
}

const finalLinks = graphLinks[chainId as keyof typeof graphLinks];

export const stakingPool = from([
  new RetryLink(),
  new HttpLink({
    uri: finalLinks.stakingpool,
  }),
]);

export default split((operation) => {
  return operation.getContext().clientName === "stakingpool";
}, stakingPool);