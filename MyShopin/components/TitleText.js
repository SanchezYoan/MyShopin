import { StyleSheet, Text } from "react-native";
import React from "react";

export default function TitleText({ style, children }) {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    padding: 9,
  },
});
