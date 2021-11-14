import React from "react";
import { StyleSheet, Text, View, Image, Dimensions, Button } from "react-native";
import image from "../../assets/shopping.jpg";
import AppButton from "../components/AppButton";
import Spacer from "../components/Spacer";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const RegisterScreen = () => {
  return (
    <View style={styles.main}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>Designer</Text>
        <Spacer space={10}/>
        <Text style={styles.subtitle}>Create your fashion in your own way</Text>
        <Spacer space={10}/>
        <Text style={styles.message}>Each men and women has their own style, Designer help you to create your unique style. </Text>
        <Spacer space={20}/>
        <View style={styles.button}>
        <Text style={styles.textButton}>Log in</Text>
      </View>
      <Spacer space={20}/>
      <Text style={styles.subtitle}>---- Or ----</Text>
      <Spacer space={20}/>
     <AppButton />
      </View>
   
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  main: {
    width: windowWidth,
    height: windowHeight,

    position: "relative",
   
  },
  image: { width: "100%", height: "100%", position: "absolute" },
  content: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    alignItems: "center",
    justifyContent: "center",
    padding:20
  },

  title: {
    fontWeight: "800",
    fontSize: 40,
  },
  subtitle:{
      fontSize:20
  },

  message:{
      textAlign:'center'
  },

  button: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 20,
   
  },

  textButton:{
      marginHorizontal:50,
      fontSize:16
  }
});
