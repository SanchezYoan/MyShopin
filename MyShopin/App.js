import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";

export default function App() {
  const [listProducts, setListProducts] = useState([]);

  const handleSubmit = (product) => {
    const idString = Date.now().toString();
    setListProducts((currentListProducts) => [
      { key: idString, name: product },
      ...currentListProducts,
    ]);
  };
  return (
    <View style={styles.container}>
      <AddProduct handleSubmit={handleSubmit} />

      <FlatList
        data={listProducts}
        renderItem={({ item }) => <Products name={item.name} />}
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
});
