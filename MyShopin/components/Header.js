import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import TitleText from "./TitleText";

const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      <TitleText style={styles.logo}>My shopping List</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: Colors.danger,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 30,
    padding: 25,
    paddingBottom: 20,
    // opacity: 0.8,
  },
  logo: {
    color: Colors.white,
    fontSize: 30,
    padding: 9,
    // fontWeight: "bold",
    fontFamily: "pacifico-regular",
  },
});
export default Header;
