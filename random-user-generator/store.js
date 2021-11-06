import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { AsyncStorage } from "react-native";
import { createTransform, persistStore, persistReducer } from "redux-persist";
import {
  reducer as network,
  createReducer as createNetworkReducer,
} from "react-native-offline";
import { createNetworkMiddleware } from "react-native-offline";
import Reactotron from "./ReactotronConfig";

import { fetchRandomNameFunction } from "./slices/dataSlice";
import dataReducer from "./slices/dataSlice";

const actions = {
  fetchRandomNameFunction,
};

// Transform how the persistor reads the network state
const networkTransform = createTransform(
  (inboundState, key) => {
    const actionQueue = [];

    inboundState.actionQueue.forEach((action) => {
      if (typeof action === "function") {
        actionQueue.push({
          function: action.meta.name,
          args: action.meta.args,
        });
      } else if (typeof action === "object") {
        actionQueue.push(action);
      }
    });

    return {
      ...inboundState,
      actionQueue,
    };
  },
  (outboundState, key) => {
    const actionQueue = [];

    outboundState.actionQueue.forEach((action) => {
      if (action.function) {
        const actionFunction = actions[action.function];
        actionQueue.push(actionFunction(...action.args));
      } else {
        actionQueue.push(action);
      }
    });

    return { ...outboundState, actionQueue };
  },
  // The 'network' key may change depending on what you
  // named your network reducer.
  { whitelist: ["network"] }
);

const networkMiddleware = createNetworkMiddleware({
  queueReleaseThrottle: 200,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  transforms: [networkTransform],
};

const comparisonFn = (action, actionQueue) => {
  console.log("action:", action);
  console.log("actionQueue:", actionQueue);

  if (typeof action === "function") {
    console.log("meta name:", action.meta.name);
  }
};

const rootReducer = combineReducers({
  dataReducer,
  network: createNetworkReducer(comparisonFn),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancer = compose(
  Reactotron.createEnhancer(),
  applyMiddleware(networkMiddleware, thunk)
);

const store = createStore(persistedReducer, undefined, composedEnhancer);
const persistor = persistStore(store);

export { store, persistor };
