import { StatusBar } from "expo-status-bar";
import React from "react";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import { NetworkProvider, useIsConnected } from "react-native-offline";
import store from "./store";

import ConnectivityStatus from "./ConnectivityStatus";
import SimpleCounter from "./SimpleCounter";

export default function App() {
  const serverURLForPing = "https://google.com";

  return (
    <Provider store={store}>
      <NetworkProvider
        pingInterval={30000}
        pingOnlyIfOffline={true}
        pingInBackground={true}
        pingServerUrl={serverURLForPing}
      >
        <NativeBaseProvider>
          <ConnectivityStatus />
          <SimpleCounter />
        </NativeBaseProvider>
      </NetworkProvider>
    </Provider>
  );
}
