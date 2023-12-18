import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

const AddProduct = ({ handleSubmit }) => {
  const [product, setProduct] = useState("");

  const handleProduct = (prod) => {
    setProduct(prod);
  };

  const handlePress = () => {
    handleSubmit(product);
    setProduct("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Nouveau produit"
          onChangeText={handleProduct}
          value={product}
        />
        <Button title="Valider" onPress={handlePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60,
  },
  inputContainer: {
    marginBottom: 20,
    flexDirection: "row",
  },
  textInput: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 5,
    paddingLeft: 9,
    fontSize: 18,
    // Prend tout l'espace disponible
    flexGrow: 1,
  },
});

export default AddProduct;
