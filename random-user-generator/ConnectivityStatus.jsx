import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { Badge, Box } from "native-base";

import { getConnectivityStatus } from "./slices/dataSlice";

const ConnectivityStatus = () => {
  const isOnline = useSelector(getConnectivityStatus);
  return (
    <Box p={5}>
      {isOnline ? (
        <Badge colorScheme="success">ONLINE</Badge>
      ) : (
        <Badge colorScheme="danger">OFFLINE</Badge>
      )}
    </Box>
  );
};

export default ConnectivityStatus;
