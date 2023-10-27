//https://github.com/Mudassirraza912/react-native-image-slider-banner
// https://www.youtube.com/watch?v=u4q3u3K8KY8

import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

import React, { cloneElement } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from "react-native";

const emuList = [
  {
    id: 1,
    img: require("../../assets/images/emu4.jpeg"),
    description: "Feeding of Emus",
  },
  {
    id: 2,
    img: require("../../assets/images/emu5.jpeg"),
    description: "Emu bird( 5 feet height)",
  },
  {
    id: 3,
    img: require("../../assets/images/emu6.jpeg"),
    description: "Emu with her chicks.",
  },
  {
    id: 4,
    img: require("../../assets/images/emu7.jpeg"),
    description: "Protected enclosure for chicks",
  },
  {
    id: 5,
    img: require("../../assets/images/emu8.jpeg"),
    description: "Emu bird (60kgs weight).",
  },
  {
    id: 6,
    img: require("../../assets/images/emu9.jpeg"),
    description: "Emu egg(600 grams)",
  },
  {
    id: 7,
    img: require("../../assets/images/emu10.jpeg"),
    description: "Feeding of Adults",
  },
];

export default function Emu({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <Text
        style={{
          textAlign: "center",
          margin: 15,
          maxWidth: 340,
          fontWeight: "500",
        }}
      >
        <Text style={{ color: "#9a0202", fontSize: 16, fontWeight: "bold" }}>
          Emu
        </Text>{" "}
        farming in India is a popular in some states of India like Andhra
        Pradesh, Telangana, Karnataka, Maharashtra and Tamil Nadu. Emus are
        large sized poultry birds of ratite group and have high economic value.
        They produce valuable eggs, meat, oil, skin and feathers. They can adopt
        themselves with almost all types of agro climatic conditions. They can
        be raised in both extensive and semi intensive farming systems.
      </Text>
      <FlatList
        data={emuList}
        renderItem={({ item }) => (
          <View style={styles.videoContainer}>
            <View style={styles.videoHeader}>
              <Text style={styles.videoName}>{item.description}</Text>
            </View>
            <Image source={item.img} style={{ width: "90%", height: 200 }} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },
  videoStyle: { margin: 15 },
  videoHeader: {
    backgroundColor: "#928e8e",
    marginBottom: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  videoContainer: {
    backgroundColor: "#928e8e",
    padding: width < 890 ? 10 : 25,
    height: 270,
    borderRadius: 5,
    marginBottom: 25,
    width: width < 890 ? 360 : 440,
    alignItems: "center",
  },
  videoName: {
    color: "#f6f4f4",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
