import { StyleSheet } from "react-native";
import Colors from "./Colors";
// import { Inter_400Regular } from "@expo-google-fonts/inter";

export default StyleSheet.create({
  headerOne: {
    color: Colors.white,
    fontSize: 30,
    padding: 9,
    fontFamily: "pacifico-regular",
  },
  headerTwo: {
    color: Colors.danger,
    fontSize: 25,
    padding: 9,
    // fontFamily: Inter_400Regular,
    textAlign: "center",
    fontFamily: "pacifico-regular",
  },
  textBody: {
    color: Colors.grey,
    fontSize: 15,
  },
});
