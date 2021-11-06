import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";

import { getNetworkActionQueue } from "./slices/dataSlice";

const ActionQueueContainer = () => {
  const actionQueue = useSelector(getNetworkActionQueue);

  return (
    <>
      <Text>Action Queue:</Text>
      <Text>{actionQueue.length}</Text>
    </>
  );
};

export default ActionQueueContainer;
