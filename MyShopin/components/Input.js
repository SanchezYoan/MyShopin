import { StyleSheet, TextInput } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const Input = ({ textPlaceholder, handleProduct, inputValue, style }) => {
  return (
    <TextInput
      // multiline
      // Permet d'écrire sur plusieurs lignes
      // numberOfLines={4}
      style={{ ...styles.input, ...style }}
      placeholder={textPlaceholder}
      maxLength={12}
      onChangeText={handleProduct}
      value={inputValue}
      // Masque l'entrée en "*"
      // secureTextEntry
      // -----------------//
      // désactive le textInput
      // editable={false}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: Colors.secondary,
    borderWidth: 1,
    height: 40,
    marginVertical: 5,
  },
});
export default Input;
