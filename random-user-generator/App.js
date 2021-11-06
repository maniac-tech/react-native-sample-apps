import React, { useState } from "react";
import { Provider, useSelector } from "react-redux";
import { StyleSheet, Text } from "react-native";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { ReduxNetworkProvider } from "react-native-offline";
import {
  Box,
  Button,
  Center,
  Heading,
  NativeBaseProvider,
  Row,
  Stack,
  StatusBar,
  Switch,
} from "native-base";

import { getNetworkActionQueue } from "./slices/dataSlice";
import ConnectivityStatus from "./ConnectivityStatus";
import RandomNameGenerator from "./RandomNameGenerator";

import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));

export default function App() {
  const DEFAULT_ONLINE_ON_LOAD = true;
  const [switcherCheckState, setSwitcherCheckState] = useState(
    DEFAULT_ONLINE_ON_LOAD
  );

  const deleteLocalStorage = () => {
    persistor.purge();
  };

  const switchToggleHandler = (oldState) => {
    setSwitcherCheckState(oldState);
  };

  return (
    <Provider store={store}>
      <StatusBar style="dark" />
      <PersistGate loading={null} persistor={persistor}>
        <ReduxNetworkProvider
          pingServerUrl={
            switcherCheckState
              ? "https://google.com"
              : "https://gsfdsgadgdsafgoogle.com"
          }
        >
          <NativeBaseProvider>
            <StatusBar />
            <Center>
              <Stack direction="row">
                <Heading m={5}>Random Name Generator!</Heading>
                <ConnectivityStatus />
              </Stack>
              <Row>
                <Center>
                  <Text>Mock No internet by turning off the switcher:</Text>
                </Center>
                <Switch
                  onToggle={switchToggleHandler}
                  isChecked={switcherCheckState}
                />
              </Row>
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
