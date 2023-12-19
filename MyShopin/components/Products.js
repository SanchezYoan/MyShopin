import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const Products = ({ name, deleteProduct, idString }) => {
  // const handleDelete = () => {};
  return (
    <Pressable
      onLongPress={() => deleteProduct(idString)}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "blue" : "red",
        },
      ]}
    >
      <View>
        <Text style={styles.element}>{name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  items: {
    // marginTop: 10,
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
