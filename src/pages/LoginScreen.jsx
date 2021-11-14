import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,

  Button,
} from "react-native";
import Spacer from "../components/Spacer";
import model from "../../assets/model.png";
import { Feather } from "@expo/vector-icons";
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton"
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const LoginScreen = () => {
  return (
    <View style={{ width: windowWidth, height: windowHeight }}>
      <View style={styles.header}>
        <Image style={styles.image} source={model} />
        <Spacer space={20} />
        <View style={{ width: "60%" }}>
          <Text style={styles.title}>Welcome Back!</Text>
          <Spacer space={20} />
          <Text style={styles.submain}>
            Thanks for shopping with us. We have excited deals and promotions
            going on, grab your pick now!{" "}
          </Text>
        </View>

        <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
          LOG IN
        </Text>
      </View>
      <AppInput placeholder="User Name" label="User Name">
        <Feather name="user" size={24} color="black" />
      </AppInput>
      <AppInput placeholder="Password" label="Enter your password">
        <Feather name="lock" size={24} color="black" />
      </AppInput>

    
      <Button title="Forgot password?"/>
      <View style={{width:'100%', padding:30}}>
      <AppButton text="LOG IN"/>
      </View>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
          <Text>Not registered yet?</Text>
          <Button title="Create an Account"/>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "50%",
    backgroundColor: "#212121",
    padding: 30,
    justifyContent: "space-evenly",
    position: "relative",
  },

  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  submain: {
    color: "white",
    fontSize: 15,
    textAlign: "justify",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "contain",
    right: -100,
  },
});
