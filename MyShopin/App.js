import { useState } from "react";
import {
  Text,
  FlatList,
  Modal,
  StyleSheet,
  View,
  Pressable,
  Button,
  Image,
} from "react-native";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import DissmissKeyboard from "./components/DissmissKeyboard";

export default function App() {
  const [listProducts, setListProducts] = useState([]);

  const [showModal, setShowModal] = useState(true);

  const [displayModal, setDisplayModal] = useState(false);

  const handleSubmit = (product) => {
    setDisplayModal(false);
    if (product.length > 3) {
      const idString = Date.now().toString();
      setListProducts((currentListProducts) => [
        { key: idString, name: product },
        ...currentListProducts,
      ]);
    } else {
      setShowModal(true);
    }
  };

  const cancelNewProduct = () => {
    setDisplayModal(false);
  };

  const deleteProduct = (key) => {
    setListProducts((currentMyProducts) => {
      return currentMyProducts.filter((product) => product.key != key);
    });
  };
  return (
    // Permet d'enlever le clavier virtuel
    <DissmissKeyboard>
      <View style={styles.container}>
        <Modal
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
          hardwareAccelerated
          transparent
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalHeaderText}>Oups !</Text>
              </View>
              <View style={styles.modalBody}>
                {/* <Image source={require("./assets/cross_cancel.png")} /> */}
                <Image
                  source={{
                    uri: "https://cdn.pixabay.com/photo/2013/07/12/13/50/road-sign-147409_960_720.png",
                  }}
                  style={{ width: 40, height: 40 }}
                />
                <Text style={styles.modalBodyText}>
                  Merci d'indiquer plus d'un caractère
                </Text>
              </View>
              <View style={styles.modalFooter}>
                <Pressable
                  style={styles.btnPressableModal}
                  onPress={() => setShowModal(false)}
                >
                  <Text style={styles.modalFooterText}>OK</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <Button title="Nouveau produit" onPress={() => setDisplayModal(true)} />
        <AddProduct
          handleSubmit={handleSubmit}
          displayModal={displayModal}
          cancelNewProduct={cancelNewProduct}
        />

        <FlatList
          data={listProducts}
          renderItem={({ item }) => (
            <Products
              name={item.name}
              deleteProduct={deleteProduct}
              idString={item.key}
            />
          )}
        />
      </View>
    </DissmissKeyboard>
  );
}

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
    padding: 5,
    paddingLeft: 9,
    fontSize: 18,
    // Prend tout l'espace disponible
    flexGrow: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0, 0.2)",
  },
  modalContent: {
    backgroundColor: "white",
    width: "90%",
    height: 300,
    borderRadius: 15,
    padding: 9,
    alignItems: "center",
  },
  modalHeader: {
    padding: 16,
    alignItems: "center",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  modalHeaderText: {
    color: "grey",
    fontSize: 17,
  },
  modalBody: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  modalBodyText: {
    fontSize: 17,
    color: "black",
  },
  modalFooter: {
    width: "100%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  btnPressableModal: {
    backgroundColor: "#bdbd7e",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopWidth: 1,
    borderTopColor: "lightgray",
  },
  modalFooterText: {
    color: "white",
    fontSize: 16,
    padding: 5,
  },
});
