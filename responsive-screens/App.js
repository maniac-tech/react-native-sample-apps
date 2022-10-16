import { Text, View } from "react-native";

import styles from "./appStyleSheet";

const NumpadButton = () => {
  return (
    <View style={styles.numpad}>
      <View style={styles.keypad}>
        <Text style={styles.digit}>Numpad</Text>
        <Text style={styles.digit}>Numpad</Text>
        <Text style={styles.digit}>Numpad</Text>
        <Text style={styles.digit}>Numpad</Text>
        <Text style={styles.digit}>Numpad</Text>
        <Text style={styles.digit}>Numpad</Text>
        <Text style={styles.digit}>Numpad</Text>
        <Text style={styles.digit}>Numpad</Text>
        <Text style={styles.digit}>Numpad</Text>
        <Text style={styles.digit}>Numpad</Text>
        <Text style={styles.digit}>Numpad</Text>
        <Text style={styles.digit}>Numpad</Text>
      </View>
      <View style={styles.actionButtons}>
        <Text>Action Button</Text>
        <Text>Action Button</Text>
        <Text>Action Button</Text>
        <Text>Action Button</Text>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.addScreen}>
        <Text>Add Screen</Text>
      </View>
      <View>
        <Text>Categories</Text>
      </View>
      <NumpadButton />
    </View>
  );
}
