import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button, Center, FlatList, Text } from "native-base";

import ActionQueueContainer from "./ActionQueueContainer";
import { fetchRandomName, getRandomUserEmail } from "./slices/dataSlice";

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
      <ActionQueueContainer />
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

export default RandomNameGenerator;
