import { createStore } from "redux";
import simpleCounterReducer from "./CounterReducer";
// import AsyncStorage from "@react-native-community/async-storage";
import { AsyncStorage } from 'react-native';
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "persistedReducer",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, simpleCounterReducer);
const store = createStore(persistedReducer);

let persistor = persistStore(store);

export { store, persistor };
