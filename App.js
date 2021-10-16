import { StatusBar } from "expo-status-bar";
import React from "react";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

import SimpleCounter from "./SimpleCounter";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <SimpleCounter />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}
