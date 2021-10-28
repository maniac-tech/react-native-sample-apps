import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { offlineActionTypes } from "react-native-offline";

// if(action.type === offlineActionTypes.CONNECTION_CHANGE){ // do something in your reducer

// }

const offlineActionType = offlineActionTypes.CONNECTION_CHANGE;
console.log("offlineActionType:", offlineActionType);

const dataSlice = createSlice({
  name: "dataSlice",
  initialState: {
    data: [],
  },
  reducers: {
    setData: (state, { payload }) => {
      const existingData = state.data;
      existingData.push({ id: 2, title: payload});
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
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;

export const getRandomUserEmail = (state) => state.dataReducer.data;
export const getConnectivityStatus = (state) => state.network.isConnected;
