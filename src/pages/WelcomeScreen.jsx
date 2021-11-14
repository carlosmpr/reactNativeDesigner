import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import image from "../../assets/design.jpg";
import Spacer from "../components/Spacer";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const WelcomeScreen = () => {
  return (
    <View style={styles.main}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>Designer</Text>
      <Spacer space={10}/>
      <View style={styles.button}>
        <Text style={styles.textButton}>Shop Now</Text>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  main: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "red",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  image: { width: "100%", height: "100%", position: "absolute" },
  title: { color: "white", fontSize: 60, fontWeight: "bold" },
  button: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 20,
    borderColor: "white",
  },
  textButton: {
      marginHorizontal:40,
    color: "white",
    fontSize: 15,
    textShadowColor: "rgba(0, 0, 0,1)",
    textShadowOffset: { width: -5, height: 1 },
    textShadowRadius: 10,

    fontWeight: "700",
  },
});
