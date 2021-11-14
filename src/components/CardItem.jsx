import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Spacer from "./Spacer";
import { FontAwesome } from "@expo/vector-icons";
const CardItem = ({ image, title, price }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <FontAwesome name="heart-o" size={24} color="black" />
        <Image source={image} style={styles.image} />
      </View>
      <Spacer space={15} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>${price} USD</Text>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
    container:{ width: "45%", alignItems: "center", marginVertical:20 },
  card: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    backgroundColor: "#F1F4FB",
    position: "relative",
    padding: 20,
    alignItems: "flex-end",
  },

  image: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
    position: "absolute",
    left: 20,
    bottom: 20,
  },

  title: { fontWeight: "700" },
  price: { fontWeight: "300", color: "#A1A1A1" },
});
