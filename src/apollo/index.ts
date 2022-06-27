import { ApolloClient, InMemoryCache } from "@apollo/client";
import merge from "lodash.merge";
import { useMemo } from "react";
import link from "./links";

let apolloClient:any;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    connectToDevTools: true,
    link,
    cache: new InMemoryCache(),
  });
}

export function getApollo(initialState = null) {
  const _apolloClient = createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();
    const data = merge(initialState, existingCache);
    _apolloClient.cache.restore(data);
  }

  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState:any) {
  return useMemo(() => getApollo(initialState), [initialState]);
}
