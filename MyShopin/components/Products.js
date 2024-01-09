import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Colors from "../constants/Colors";

const Products = ({ name, deleteProduct, idString }) => {
  return (
    <Pressable onLongPress={() => deleteProduct(idString)}>
      <View style={styles.items}>
        <Text style={styles.element}>{name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  items: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: Colors.info,
  },
  element: {
    backgroundColor: Colors.white,
    borderTopWidth: 5,
    borderTopColor: "red",
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
});

export default Products;
