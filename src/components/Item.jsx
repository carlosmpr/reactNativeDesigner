import React from "react";
import { StyleSheet, Text, View,Image } from "react-native";

import Spacer from "./Spacer";
const Item = ({image}) => {
  return (
    <View
      style={{
        width: "100%",
        height: 120,
        backgroundColor: "#F1F4FB",
        borderRadius: 10,
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
        justifyContent: "space-evenly",
        marginVertical:20
      }}
    >
      <View>
        <Image source={image} style={{width:100, height:100}}/>
      </View>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Leather Jacket</Text>
        <Spacer space={5} />
        <Text style={{ fontSize: 18 }}>$28 USD</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "25%",
          justifyContent: "space-evenly",
          padding: 5,
          backgroundColor: "white",
          alignItems: "center",
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "gray",
        }}
      >
        <Text style={{ fontSize: 26 }}>-</Text>
        <Text style={{ fontSize: 18 }}>1</Text>
        <Text style={{ fontSize: 25 }}>+</Text>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({});
