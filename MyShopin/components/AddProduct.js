import React, { useEffect, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import { StyleSheet, TextInput, View, Modal } from "react-native";
import Colors from "../constants/Colors";

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
          style={styles.textInput}
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
    borderColor: "grey",
    borderWidth: 1,
    marginBottom: 9,
    padding: 5,
    paddingLeft: 9,
    fontSize: 18,
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
