import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useIsConnected } from "react-native-offline";

const ConnectivityStatus = (props) => {
  const isInternetAvailable = useIsConnected();
  console.log("isInternetAvailable:", isInternetAvailable);

  return (
    <View style={styles.container}>
      <Text>
        Internet is: {isInternetAvailable ? "available" : "not available"}
      </Text>
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
