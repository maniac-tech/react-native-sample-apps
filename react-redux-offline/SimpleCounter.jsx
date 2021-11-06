import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { connect } from "react-redux";
import { Button } from "native-base";

import { incrementAction, decrementAction, changeByAmount } from "./actions";

const SimpleCounter = (props) => {
  const increment = () => {
    console.log("increment called");
    props.dispatch(incrementAction());
  };

  const decrement = () => {
    props.dispatch(decrementAction());
  };

  const handleInputChange = (event) => {
    props.dispatch(changeByAmount(event.nativeEvent.text));
  };

  return (
    <View style={styles.container}>
      <Text>Counter:</Text>
      <Text>{props.amount}</Text>
      <View style={styles.floatingView}>
        <Button onPress={increment}>+</Button>
        <Button onPress={decrement}>-</Button>
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

const mapStateToProps = (state, props) => {
  return { amount: state.counter.amount };
};

export default connect(mapStateToProps)(SimpleCounter);
