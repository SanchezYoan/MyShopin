import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Products from "./components/Products";

export default function App() {
  const [product, setProduct] = useState("");
  const [listProducts, setListProducts] = useState([]);

  const handleProduct = (prod) => {
    setProduct(prod);
  };

  const handleSubmit = () => {
    if (product.trim()) {
      const idString = Date.now().toString();
      setListProducts((currentListProducts) => [
        { key: idString, name: product },
        ...currentListProducts,
      ]);
      setProduct("");
    }
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
        <Button title="Valider" onPress={handleSubmit} />
      </View>
      <FlatList
        data={listProducts}
        renderItem={({ item }) => (
          // <Text style={styles.element}>{item ? item.name : item}</Text>
          <Products name={item.name} />
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
  // items: {
  //   marginTop: 10,
  // },
  element: {
    backgroundColor: "grey",
    color: "white",
    padding: 10,
    marginTop: 15,
    fontSize: 18,
  },
});
