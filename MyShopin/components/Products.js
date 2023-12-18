import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Products = ({ name }) => {
  return (
    <View style={styles.items}>
      <Text style={styles.element}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    marginTop: 10,
  },
  element: {
    backgroundColor: "grey",
    color: "white",
    padding: 10,
    marginTop: 15,
    fontSize: 18,
  },
});

export default Products;
