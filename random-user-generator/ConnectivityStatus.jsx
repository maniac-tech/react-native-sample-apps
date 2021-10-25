import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

import { getConnectivityStatus } from "./slices/dataSlice";

const ConnectivityStatus = () => {
  const isOnline = useSelector(getConnectivityStatus);
  return (
    <View>
      <Text>You are currently {isOnline ? "Online" : "Offline"}</Text>
    </View>
  );
};

export default ConnectivityStatus;
