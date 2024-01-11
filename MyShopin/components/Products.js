import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const Products = ({ name, deleteProduct, idString }) => {
  return (
    <Pressable onLongPress={() => deleteProduct(idString)}>
      <View style={styles.items}>
        <FontAwesome name="remove" size={25} color={Colors.white} />
        <Text style={styles.element}>{name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  items: {
    marginTop: 15,
    marginBottom: 15,
    padding: 5,
    backgroundColor: Colors.warning,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  element: {
    // backgroundColor: none,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    marginLeft: 15,
    padding: 15,
    color: Colors.white,
  },
});

export default Products;
