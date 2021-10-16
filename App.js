import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from "react-native";
import { NativeBaseProvider, Box } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text>Counter: 0</Text>
        <View style={styles.floatingView}>
          <TouchableOpacity style={styles.floatingButton}>
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.floatingButton}>
            <Text>-</Text>
          </TouchableOpacity>
        </View>
        <TextInput keyboardType="numeric" placeholder="change amount" />
      </View>
    </NativeBaseProvider>
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
