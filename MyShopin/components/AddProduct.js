import React, { useEffect, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import { StyleSheet, TextInput, View, Modal } from "react-native";
import Colors from "../constants/Colors";
import Input from "./Input";

const AddProduct = ({ handleSubmit, displayModal, cancelNewProduct }) => {
  const [product, setProducts] = useState("");
  // entré pour ajouter un produit
  const [btnDisable, setBtnDisable] = useState(true);
  // gestion d'etat du button valider

  useEffect(() => {
    if (product.length > 3) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
    // l'événènement se déclenche quand product est modifié
  }, [product]);
  const handleProduct = (prod) => {
    // caractères autorisés
    const regex = /[^a-z^0-9]/gi;
    setProducts(prod.replace(regex, ""));
  };

  const handlePress = () => {
    handleSubmit(product);
    setProducts("");
  };

  return (
    <Modal visible={displayModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Input
          style={styles.textInput}
          textPlaceholder="Nouveau produit"
          handleProduct={handleProduct}
          inputValue={product}
          maxLength={10}
          // keyboardType
          // Détermine quel clavier ouvrir, par exemple numeric
        />
        <View style={styles.btnContainer}>
          <ButtonComponent
            onPressHandler={handlePress}
            disabled={btnDisable}
            style={styles.btnBlue}
          >
            Valider
          </ButtonComponent>

          <ButtonComponent
            onPressHandler={cancelNewProduct}
            style={styles.btnTomato}
          >
            Annuler
          </ButtonComponent>
        </View>
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
    borderWidth: 1,
    marginBottom: 9,
    padding: 5,
    fontSize: 18,
    borderRadius: 30,
    textAlign: "center",
    height: 50,
    // Prend tout l'espace disponible
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btnBlue: { width: 150, backgroundColor: Colors.success, borderRadius: 6 },
  btnTomato: { width: 150, backgroundColor: Colors.warning, borderRadius: 6 },
});

export default AddProduct;
