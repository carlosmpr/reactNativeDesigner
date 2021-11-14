import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Page from "../components/Page";
import image from "../../assets/purple.png";
import { FontAwesome, Entypo, AntDesign, Ionicons } from "@expo/vector-icons";
import Spacer from "../components/Spacer";
import AppButton from "../components/AppButton";

const DetailScreen = () => {
  return (
    <View>
      <View
        style={{
          width: "100%",
          height: 400,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Image
          source={image}
          style={{ width: "60%", height: "80%", resizeMode: "contain" }}
        />
      </View>
      <Page>
        <View
          style={{ backgroundColor: "#F1F4FB", padding: 20, borderRadius: 20 }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontWeight: "700", fontSize: 20 }}>
              Purple Hoodie
            </Text>
            <Text style={{ fontWeight: "700", fontSize: 20 }}>$48</Text>
          </View>
          <View style={styles.formatter}>
            <FontAwesome name="star" size={15} color="#FCDD8D" />
            <FontAwesome name="star" size={15} color="#FCDD8D" />
            <FontAwesome name="star" size={15} color="#FCDD8D" />
            <FontAwesome name="star" size={15} color="#FCDD8D" />
            <FontAwesome name="star" size={15} color="gray" />
          </View>
          <Spacer space={10} />
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
          <View style={{ marginVertical: 10 }}></View>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>Description</Text>
          <View style={{ marginVertical: 10 }}></View>
          <Text style={{ textAlign: "justify" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and{" "}
          </Text>
          <View style={{ marginVertical: 10 }}></View>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>Select Size</Text>
          <View style={{ marginVertical: 10 }}></View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "70%",
            }}
          >
            <View
              style={{ padding: 10, backgroundColor: "black", borderRadius: 5 }}
            >
              <Text style={{ color: "white", fontSize: 14 }}>S</Text>
            </View>

            <View style={{ padding: 10, borderWidth: 1, borderRadius: 5 }}>
              <Text style={{ fontSize: 14 }}>M</Text>
            </View>

            <View style={{ padding: 10, borderWidth: 1, borderRadius: 5 }}>
              <Text style={{ fontSize: 14 }}>L</Text>
            </View>
            <View style={{ padding: 10, borderWidth: 1, borderRadius: 5 }}>
              <Text style={{ fontSize: 14 }}>Xl</Text>
            </View>
            <View style={{ padding: 10, borderWidth: 1, borderRadius: 5 }}>
              <Text style={{ fontSize: 14 }}>XXL</Text>
            </View>
          </View>

          <Spacer space={90} />

          <AppButton text="Add to cart" />
          <View style={{ height: 400 }}></View>
        </View>
      </Page>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  formatter: { display: "flex", flexDirection: "row", alignItems: "center" },
});
