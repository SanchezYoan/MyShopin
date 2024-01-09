import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const ButtonComponent = (props) => {
  return (
    <Pressable onPress={props.onPressHandler}>
      <View style={{ ...styles.btn, ...props.style }}>
        <Text style={styles.btnText}>{props.btnTitle}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "green",
    padding: 9,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 17,
  },
});

export default ButtonComponent;
