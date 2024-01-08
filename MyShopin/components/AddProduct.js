import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

const AddProduct = ({ handleSubmit }) => {
  const [product, setProducts] = useState("");
  // entré pour ajouter un produit
  const [btnDisable, setBtnDisable] = useState(true);
  // gestion d'etat du button valider

  useEffect(() => {
    if (product.length > 1) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
    // l'événènement se déclenche quand product est modifié
  }, [product]);
  const handleProduct = (prod) => {
    setProducts(prod);
  };

  const handlePress = () => {
    handleSubmit(product);
    setProducts("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          // Permet d'écrire sur plusieurs lignes
          // numberOfLines={4}
          // style={styles.textInput}
          placeholder="Nouveau produit"
          maxLength={12}
          onChangeText={(e) => handleProduct(e)}
          value={product}
          // Masque l'entrée en "*"
          // secureTextEntry
          // -----------------//
          // désactive le textInput
          // editable={false}
        />
        <Button title="Valider" onPress={handlePress} disabled={btnDisable} />
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
  },
  textInput: {
    borderColor: "grey",
    borderWidth: 1,
    marginBottom: 9,
    padding: 5,
    paddingLeft: 9,
    fontSize: 18,
    // Prend tout l'espace disponible
    flexGrow: 1,
  },
});

export default AddProduct;
