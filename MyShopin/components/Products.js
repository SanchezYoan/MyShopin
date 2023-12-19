import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const Products = ({ name }) => {
  // const handleDelete = () => {};
  return (
    <Pressable
      onLongPress={() => console.log("CLICK")}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "blue" : "red",
        },
      ]}
      delayLongPress={2500}
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
