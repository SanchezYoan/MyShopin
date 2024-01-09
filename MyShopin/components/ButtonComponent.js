import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ButtonComponent = ({ onPressHandler, style, children }) => {
  return (
    <TouchableOpacity onPress={onPressHandler} activeOpacity={0.6}>
      <View style={{ ...styles.btn, ...style }}>
        <Text style={styles.btnText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "seagreen",
    padding: 9,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 17,
  },
});

export default ButtonComponent;
