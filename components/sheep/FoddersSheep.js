import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from "react-native";

const fodderList = [
  {
    id: 1,
    img: require("../../assets/images/fodder1.jpeg"),
    description: "Fodder trees",
  },
  {
    id: 2,
    img: require("../../assets/images/fodder2.jpeg"),
    description: "Subabul trees",
  },
  {
    id: 3,
    img: require("../../assets/images/fodder3.jpeg"),
    description: "Left hedge-lucerne Right Subabul",
  },
  {
    id: 4,
    img: require("../../assets/images/fodder4.jpeg"),
    description: "Siratro",
  },
  {
    id: 5,
    img: require("../../assets/images/fodder5.jpeg"),
    description: "Horse gram",
  },
  {
    id: 6,
    img: require("../../assets/images/fodder6.jpeg"),
    description: "Left Adaviveopa Right Vepa or Neem",
  },
  {
    id: 7,
    img: require("../../assets/images/fodder7.jpeg"),
    description: "Indigenous grasses inn mango orchards",
  },
  {
    id: 8,
    img: require("../../assets/images/fodder8.jpeg"),
    description: "Hedge-Lucerne and with Avisa(Sesbania) on both sides",
  },
  {
    id: 9,
    img: require("../../assets/images/fodder9.jpeg"),
    description: "Hedge-Lucerne",
  },
  {
    id: 10,
    img: require("../../assets/images/fodder10.jpeg"),
    description: "Guinea-grass",
  },
  {
    id: 11,
    img: require("../../assets/images/fodder11.jpeg"),
    description: "Lucerne",
  },
];

export default function FoddersSheep({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text
        style={{
          color: "#9a0202",
          fontSize: 18,
          fontWeight: "bold",
          marginTop: 6,
        }}
      >
        Fodders for Sheep
      </Text>
      <Text
        style={{
          textAlign: "center",
          margin: 15,
          maxWidth: 340,
          fontWeight: "500",
        }}
      >
        <Text style={{ color: "#2c2525", fontSize: 16, fontWeight: "bold" }}>
          The fodders for sheep{" "}
        </Text>
        should be short in height. The different systems of fodder production
        for sheep can be obtained from indigenous grasses, fodder trees,
        silvipasture, hortipasture etc. The types of fodder suitable are show
        below.
      </Text>
      <FlatList
        data={fodderList}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <View style={styles.imageHeader}>
              <Text style={styles.imageName}>{item.description}</Text>
            </View>
            <Image source={item.img} style={{ width: "90%", height: 180 }} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },

  imageHeader: {
    backgroundColor: "#819482",
    marginBottom: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  imageContainer: {
    backgroundColor: "#819482",
    padding: width < 890 ? 10 : 25,
    height: 270,
    borderRadius: 5,
    marginBottom: 25,
    width: width < 890 ? 360 : 440,
    alignItems: "center",
  },
  imageName: {
    color: "#f6f4f4",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
