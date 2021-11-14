import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Page from "../components/Page";
import { FontAwesome, FontAwesome5, Feather, Entypo } from "@expo/vector-icons";
import HorizontalScrollView from "../components/HorizontalScrollView";
import TextBadge from "../components/TextBadge";
import Spacer from "../components/Spacer";
import hoodie from "../../assets/hoodie.png";
import leather from "../../assets/leather.png";
import CardItem from "../components/CardItem";
const data = [
  { text: "Popular", active: true },
  { text: "Mens", active: false },
  { text: "Womens", active: false },
  { text: "Sale", active: false },
  { text: "Special", active: false },
  { text: "Favorites", active: false },
];

const data2 = [
  {
    image: hoodie,
    title: "Pink Hoodie",
    price: 40,
  },

  {
    image: leather,
    title: "Leather Jacket",
    price: 48,
  },

  {
    image: hoodie,
    title: "Pink Hoodie",
    price: 40,
  },

  {
    image: leather,
    title: "Leather Jacket",
    price: 48,
  },
  {
    image: hoodie,
    title: "Pink Hoodie",
    price: 40,
  },

  {
    image: leather,
    title: "Leather Jacket",
    price: 48,
  }
];
const ShopScreen = () => {
  return (
    <Page>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Designer.</Text>
        <FontAwesome5 name="bell" size={24} color="black" />
        <FontAwesome name="shopping-cart" size={24} color="black" />
        <FontAwesome name="heart-o" size={24} color="black" />
        <Feather name="search" size={24} color="black" />
        <FontAwesome name="bars" size={24} color="black" />
      </View>
      <Spacer space={60} />
      <HorizontalScrollView>
        {data.map((item) => (
          <TextBadge {...item} key={item.text} />
        ))}
      </HorizontalScrollView>
      <Spacer space={30} />
      <View style={styles.subMenu}>
        <View style={{ flexDirection: "row" }}>
          <Text>FILTER & SORT</Text>
          <FontAwesome name="sort-amount-asc" size={16} color="black" />
        </View>
        <View>
          <Entypo name="grid" size={24} color="black" />
        </View>
      </View>
      <Spacer space={20} />
      <View style={styles.content}>
        {data2.map((item) => <CardItem {...item} key={item.title}/>)}
      </View>
      <View style={{height:200}}>

      </View>
    </Page>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  headerTitle: {
    fontWeight: "800",
    fontSize: 18,
  },
  subMenu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent:'space-evenly',
  },
});
