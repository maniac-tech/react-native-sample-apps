import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button, Center, FlatList, Text } from "native-base";

import { setData, getRandomUserEmail } from "./slices/dataSlice";

const fetchRandomName = () => {
  function thunkFunction(dispatch) {
    fetch("https://randomuser.me/api/")
      .then((response) => {
        // console.log("response:", response);
        return response;
      })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        // console.log(responseJson.results[0].email);
        dispatch(setData(responseJson.results[0].email));
      });
  }
  thunkFunction.interceptInOffline = true;
  thunkFunction.meta = {
    retry: true,
    name: "fetchRandomName",
    args: [],
  };
  return thunkFunction;
};

const RandomNameGenerator = () => {
  const dispatch = useDispatch();
  const DATA = useSelector(getRandomUserEmail);

  const buttonClickHandler = () => {
    console.log("Generate Random Data button clicked!!");
    dispatch(fetchRandomName());
  };

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <Center flex={1} px="3">
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button onPress={buttonClickHandler}>Generate Random User data</Button>
    </Center>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
  },
});

export { fetchRandomName };
export default RandomNameGenerator;
