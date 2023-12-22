import { useState } from "react";
import {
  Text,
  FlatList,
  Modal,
  StyleSheet,
  View,
  Pressable,
} from "react-native";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";

export default function App() {
  const [listProducts, setListProducts] = useState([]);

  const [showModal, setShowModal] = useState(true);

  const handleSubmit = (product) => {
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

  const deleteProduct = (key) => {
    setListProducts((currentMyProducts) => {
      return currentMyProducts.filter((product) => product.key != key);
    });
  };
  return (
    <View style={styles.container}>
      <Modal visible={showModal} onRequestClose={() => setShowModal(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>Oups !</Text>
            </View>
            <View style={styles.modalBody}>
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
      <AddProduct handleSubmit={handleSubmit} />

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
  );
}

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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0, 0.2)",
  },
  modalContent: {
    backgroundColor: "red",
    width: "90%",
    height: 250,
    borderRadius: 15,
    padding: 9,
    alignItems: "center",
  },
  modalHeader: {
    backgroundColor: "black",
    width: "100%",
    padding: 16,
    alignItems: "center",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  modalHeaderText: {
    color: "white",
    fontSize: 16,
  },
  modalBody: {
    flex: 1,
    width: "100%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  modalBodyText: {
    fontSize: 17,
    color: "white",
  },
  modalFooter: {
    width: "100%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  btnPressableModal: {
    backgroundColor: "black",
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
