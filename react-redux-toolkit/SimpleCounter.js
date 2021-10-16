import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "native-base";

import {
  getCounterValue,
  decrement,
  increment,
  setCounter,
} from "./slices/counterSlice";

const SimpleCounter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(getCounterValue);

  const incrementClickHandler = () => {
    const newCounter = counter + 1 || 1;
    dispatch(increment(newCounter));
  };

  const decrementClickHandler = () => {
    const newCounter = counter - 1;
    dispatch(decrement(newCounter));
  };

  const handleInputChange = (event) => {
    const newCounter = event.nativeEvent.text;
    dispatch(setCounter(newCounter));
  };

  return (
    <View style={styles.container}>
      <Text>Counter: {counter}</Text>
      <View style={styles.floatingView}>
        <Button onPress={incrementClickHandler}>+</Button>
        <Button onPress={decrementClickHandler}>-</Button>
      </View>
      <TextInput
        onSubmitEditing={handleInputChange}
        keyboardType="numeric"
        placeholder="change amount"
      />
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

export default SimpleCounter;
