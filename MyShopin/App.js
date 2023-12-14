import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [product, setProduct] = useState("");
  const [listProducts, setListProducts] = useState([]);

  const handleProduct = (prod) => {
    setProduct(prod);
  };

  const handleSubmit = () => {
    console.log("Ajout");
    // récupérer prduits existant dans listProducts
    // Puis les injecters dans le nouvelle array
    setListProducts((currentListProducts) => [...currentListProducts, product]);
    setProduct("");
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={styles.textInput}
          placeholder="Nouveau produit"
          onChangeText={() => handleProduct()}
          value={product}
        />
        <Button title="Valider" onPress={() => handleSubmit} />
      </View>
      {/* <Text>
        {listProducts.map((prod) => (
          <Text>{prod}</Text>
        ))}
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60,
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
