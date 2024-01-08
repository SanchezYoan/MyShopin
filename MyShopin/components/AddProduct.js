import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal } from "react-native";

const AddProduct = ({ handleSubmit, displayModal }) => {
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
    <Modal visible={displayModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          // multiline
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
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
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
