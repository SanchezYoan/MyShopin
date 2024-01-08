import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import React from "react";

export default function DissmissKeyboard({ children }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
}
