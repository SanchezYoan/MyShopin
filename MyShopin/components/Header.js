import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import TitleText from "./TitleText";
import AppStyles from "../constants/AppStyles";

const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      <TitleText style={AppStyles.headerOne}>My shopping List</TitleText>
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
});
export default Header;
