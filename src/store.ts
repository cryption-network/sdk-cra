import { save, load } from "redux-localstorage-simple";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

type MergedState = {
  user: {
    [key: string]: any;
  };
  transactions: {
    [key: string]: any;
  };
};
const PERSISTED_KEYS: string[] = ["user", "transactions"];
const loadedState = load({ states: PERSISTED_KEYS }) as MergedState;
// if (loadedState.user) {
//   loadedState.user.userDarkMode = getThemeCache();
// }
const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: {},
  middleware: [
    ...getDefaultMiddleware({ thunk: true }),
    save({ states: PERSISTED_KEYS }),
  ],
  // @ts-ignore
  preloadedState: loadedState,
});

// store.dispatch(updateVersion());

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
