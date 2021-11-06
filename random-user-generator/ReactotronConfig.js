import Reactotron, { asyncStorage } from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron
  .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux())
  .use(asyncStorage())
  .connect(); // let's connect!

Reactotron.clear();

// Reactotron Custom Commands ;)
function logCurrentStorage() {
  AsyncStorage.getAllKeys().then((keyArray) => {
    AsyncStorage.multiGet(keyArray).then((keyValArray) => {
      let myStorage: any = {};
      for (let keyVal of keyValArray) {
        myStorage[keyVal[0]] = keyVal[1]
      }

      console.log('CURRENT STORAGE: ', myStorage);
    })
  });
}

function clearAsyncStorage() {
  AsyncStorage.clear()
}

Reactotron.onCustomCommand("testReactotron", () => console.log("This is a sample test for Reacotron Custom Command"))
Reactotron.onCustomCommand("consoleAsyncStorage", logCurrentStorage)
Reactotron.onCustomCommand("clearAsyncStorage", clearAsyncStorage)

export default reactotron;
