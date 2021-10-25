import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, View } from "react-native";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { ReduxNetworkProvider } from "react-native-offline";

import ConnectivityStatus from "./ConnectivityStatus";
import RandomNameGenerator from "./RandomNameGenerator";
import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ReduxNetworkProvider pingServerUrl="https://google.com">
          <View style={styles.container}>
            <RandomNameGenerator />
            <StatusBar style="auto" />
            <ConnectivityStatus />
          </View>
        </ReduxNetworkProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
