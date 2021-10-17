import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ConnectivityStatus = () => {
  const connectionStatus = "available";
  return (
    <View style={styles.container}>
      <Text>Internet is: {connectionStatus}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ConnectivityStatus;
