import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const Products = ({ name, deleteProduct, idString }) => {
  return (
    <Pressable onLongPress={() => deleteProduct(idString)} style={styles.items}>
      <View>
        <Text style={styles.element}>{name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  items: {
    marginTop: 15,
    marginBottom: 15,
  },
  element: {
    backgroundColor: "white",
    color: "black",
    borderTopWidth: 5,
    borderTopColor: "red",
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
  },
});

export default Products;
