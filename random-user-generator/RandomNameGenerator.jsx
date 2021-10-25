import React from "react";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { setData, getRandomUserEmail } from "./slices/dataSlice";

const RandomNameGenerator = () => {
  const dispatch = useDispatch();
  const randomNameData = useSelector(getRandomUserEmail);

  // const fetchRandomName = createAsyncThunk("dataSlice/setData", async () => {
  //   const response = await fetch("https://randomuser.me/api/")
  //     .then((response) => {
  //       console.log("response:", response);
  //       return response;
  //     })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((responseJson) => {
  //       return responseJson.results;
  //     });
  //   console.log(response[0].email);
  //   dispatch(setData(response[0].email));
  //   return response.name;
  // });
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
    };
    return thunkFunction;
  };

  const buttonClickHandler = () => {
    console.log("Generate Random Data button clicked!!");
    dispatch(fetchRandomName());
  };

  return (
    <View>
      <Text>Random Name Generator!</Text>
      <View>
        <Text>{randomNameData}</Text>
        <Button
          title="Generate Random user data"
          onPress={buttonClickHandler}
        ></Button>
      </View>
    </View>
  );
};

export default RandomNameGenerator;
