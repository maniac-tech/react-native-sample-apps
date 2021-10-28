import React from "react";
import { Provider } from "react-redux";
import { StyleSheet } from "react-native";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { ReduxNetworkProvider } from "react-native-offline";
import {
  Box,
  Button,
  Center,
  Heading,
  NativeBaseProvider,
  Stack,
  StatusBar,
} from "native-base";

import ConnectivityStatus from "./ConnectivityStatus";
import RandomNameGenerator from "./RandomNameGenerator";
import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));

export default function App() {
  const deleteLocalStorage = () => {
    persistor.purge();
  };

  return (
    <Provider store={store}>
      <StatusBar style="dark" />
      <PersistGate loading={null} persistor={persistor}>
        <ReduxNetworkProvider pingServerUrl="https://google.com">
          <NativeBaseProvider>
            <StatusBar />
            <Center>
              <Stack direction="row">
                <Heading m={5}>Random Name Generator!</Heading>
                <ConnectivityStatus />
              </Stack>
            </Center>
            <RandomNameGenerator />
            <Button onPress={deleteLocalStorage}>Delete Local storage</Button>
          </NativeBaseProvider>
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
