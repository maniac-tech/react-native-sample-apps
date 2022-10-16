import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  actionButtons: {
    backgroundColor: "#D2D2D2",
    width: wp("25%")
  },
  addScreen: {
    backgroundColor: "grey",
  },
  container: {
    flex: 1,
    backgroundColor: "brown",
    alignItems: "center",
    justifyContent: "center",
    width: wp("100%")
  },
  digit: {
    backgroundColor: "green",
    width: wp("24.9%"),
    height: hp(6),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: wp(0.1),
    zIndex: 2,
  },
  keypad: {
    backgroundColor: "yellow",
    flexDirection: "row",
    flexWrap: "wrap",
    width: wp("75%"),
    height: hp(28),
    justifyContent: "space-between",
  },
  numpad: {
    backgroundColor: "red",
    flexDirection: "row",
    width: wp("100%"),
    height: hp("25%")
  },
});

export default styles;
