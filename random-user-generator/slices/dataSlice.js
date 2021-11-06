import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { offlineActionTypes } from "react-native-offline";

// if(action.type === offlineActionTypes.CONNECTION_CHANGE){ // do something in your reducer

// }

const offlineActionType = offlineActionTypes.CONNECTION_CHANGE;
console.log("offlineActionType:", offlineActionType);

var actionCreatorFn = createAsyncThunk(
  "dataSlice/FETCH_RANDOM_NAME",
  async () => {
    const res = fetch("https://randomuser.me/api/")
      .then((response) => {
        return response;
      })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        return responseJson.results[0].email;
      });
    return res;
  }
);

function fetchRandomName() {
  function createOfflineThunk() {
    const forOffline = actionCreatorFn();

    return Object.assign(forOffline, actionCreatorFn, {
      interceptInOffline: true,
      meta: {
        ...(actionCreatorFn.meta || {}),
        name: "fetchRandomName"+Math.random(),
        retry: true,
        args: [],
      },
    });
  }
  return createOfflineThunk();
}

const dataSlice = createSlice({
  name: "dataSlice",
  initialState: {
    data: [],
  },
  reducers: {
    setData: (state, { payload }) => {
      const existingData = state.data;
      existingData.push({ id: 2, title: payload });
      state.data = existingData;
    },
  },
  extraReducers: {
    [offlineActionTypes.CONNECTION_CHANGE]: (state, action) => {
      console.log("state:", state);
      console.log("action:", action);
    },
    [offlineActionTypes.FETCH_OFFLINE_MODE]: (state, action) => {
      console.log("state:", state);
      console.log("action:", action);
      console.log("action.payload:", action.payload);
    },
    [actionCreatorFn.fulfilled]: (state, action) => {
      console.log("state:", state);
      console.log("action:", action);
      console.log("action.payload:", action.payload);
      const existingData = state.data;
      existingData.push({ id: 2, title: action.payload });
      state.data = existingData;
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;

export { fetchRandomName };
export const getRandomUserEmail = (state) => state.dataReducer.data;
export const getConnectivityStatus = (state) => state.network.isConnected;
export const getNetworkActionQueue = (state) => state.network.actionQueue;
