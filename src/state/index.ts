import { configureStore } from "@reduxjs/toolkit";
import { save, load } from "redux-localstorage-simple";
import {
  dappfactoryReducers,
  DF_PERSISTED_KEYS,
} from "@cryption/dapp-factory-sdk";

// OPTIONAL: set the gelato persisted keys
// If don't use `redux-localstorage-simple` you can skip this step and only set the reducers
// You can also skip you don't use the GelatoLimitOrderPanel component

const PERSISTED_KEYS: string[] = [...DF_PERSISTED_KEYS];
// const PERSISTED_KEYS: string[] = [];

const store = configureStore({
  reducer: {
    ...dappfactoryReducers,
  },
  middleware: [save({ states: PERSISTED_KEYS, debounce: 1000 })],
  preloadedState: load({ states: PERSISTED_KEYS }),
});

export default store;
