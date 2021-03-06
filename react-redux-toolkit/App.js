import { StatusBar } from "expo-status-bar";
import React from "react";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import store from "./store";

import SimpleCounter from "./SimpleCounter";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <SimpleCounter />
      </NativeBaseProvider>
    </Provider>
  );
}
