import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { AsyncStorage } from "react-native";
import { persistStore, persistReducer } from "redux-persist";
import { reducer as network } from "react-native-offline";
import { createNetworkMiddleware } from "react-native-offline";
import Reactotron from "./ReactotronConfig";

import dataReducer from "./slices/dataSlice";

const networkMiddleware = createNetworkMiddleware({
  queueReleaseThrottle: 200,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({ dataReducer, network });

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancer = compose(
  Reactotron.createEnhancer(),
  applyMiddleware(networkMiddleware, thunk)
);

const store = createStore(persistedReducer, undefined, composedEnhancer);
const persistor = persistStore(store);

export { store, persistor };
