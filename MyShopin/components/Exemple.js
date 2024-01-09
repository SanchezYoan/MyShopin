import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Exemple() {
  return (
    <View style={styles.textContainer}>
      <Text>Exemple</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    height: 300,
    width: "75%",
    backgroundColor: "#fff",
  },
});
