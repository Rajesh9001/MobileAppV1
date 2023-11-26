import { Dimensions } from "react-native";
import { ScrollView } from "react-native";
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

const IntegratedList = [
  {
    id: 1,
    img: require("../assets/images/Integrated1.jpeg"),
    description: "Integrated Farming System(Rice + Dairy + sugarcane)",
  },
  {
    id: 2,
    img: require("../assets/images/Integrated2.jpeg"),
    description: "Integrated Farming System(Beetel vine + fodders + cocount)",
  },
  {
    id: 3,
    img: require("../assets/images/Integrated3.jpeg"),
    description: "Integrated Farming System(Subabul + fodders)",
  },
  {
    id: 4,
    img: require("../assets/images/Integrated4.jpeg"),
    description:
      "Intergrated farming (Agri(Groundnut ) + Horticulture (Marigold) + Hybrid napier grass)",
  },
  {
    id: 5,
    img: require("../assets/images/Integrated5.jpeg"),
    description: "Silvipasture system",
  },
  {
    id: 6,
    img: require("../assets/images/Integrated6.jpeg"),
    description: "Cattle + Sheep farming",
  },
  {
    id: 7,
    img: require("../assets/images/Integrated7.jpeg"),
    description: "Mango orchard + Groundnut",
  },
  {
    id: 8,
    img: require("../assets/images/Integrated8.jpeg"),
    description: "Integrated Farming System(Dairy + fodders)",
  },
  {
    id: 9,
    img: require("../assets/images/Integrated9.jpeg"),
    description: "Integrated Farming System(Sheep + goat)",
  },
  {
    id: 10,
    img: require("../assets/images/Integrated10.jpeg"),
    description: "Integrated Farming System(Paddy + jowar) ",
  },
  {
    id: 11,
    img: require("../assets/images/Integrated11.jpeg"),
    description: "Horticulture + sheep",
  },
  {
    id: 12,
    img: require("../assets/images/Integrated12.jpeg"),
    description: "Hortipasture",
  },
  {
    id: 13,
    img: require("../assets/images/Integrated13.jpeg"),
    description: "Cattle + Sheep farming",
  },
  {
    id: 14,
    img: require("../assets/images/Integrated14.jpeg"),
    description: "Mango orchard + Groundnut",
  },
  {
    id: 15,
    img: require("../assets/images/Integrated15.jpeg"),
    description: "Integrated Farming System(Dairy + fodders)",
  },
  {
    id: 16,
    img: require("../assets/images/Integrated16.jpeg"),
    description: "Integrated Farming System(Sheep + goat)",
  },
  {
    id: 17,
    img: require("../assets/images/Integrated17.jpeg"),
    description: "Integrated Farming System(Paddy + jowar)",
  },
  {
    id: 18,
    img: require("../assets/images/Integrated18.jpeg"),
    description: "Horticulture + sheep",
  },
  {
    id: 19,
    img: require("../assets/images/Integrated19.jpeg"),
    description: "Hortipasture",
  },
];

export default function IntegratedFarming({ navigation }) {
  return (
    <View style={styles.screen}>
      {/* <Text
        style={{
          color: "#9a0202",
          fontSize: 18,
          fontWeight: "bold",
          marginTop: 16,
        }}
      >
        Integrated
      </Text> */}
      <Text
        style={{
          textAlign: "center",
          margin: 15,
          maxWidth: 340,
          fontWeight: "500",
        }}
      >
        <Text style={{ color: "#840404", fontSize: 16, fontWeight: "600" }}>
          Integrated Farming{" "}
        </Text>
        system is an innovative method of promoting the sustainable use of
        available natural resources incorporating livestock activities with
        traditional agricultural practices in a holistic manner suitable to
        local conditions. It is method of more efficient and effective natural
        resource management allowing nutrient recycling and improved
        diversification.
      </Text>
      <FlatList
        data={IntegratedList}
        //numColumns={width > 400 ? 2 : 1}
        renderItem={({ item }) => (
          <View style={{ alignItems: "center" }}>
            <View style={styles.imageHeader}>
              <Text style={styles.imageName}>{item.description}</Text>
            </View>
            <View
              style={[
                styles.imageContainer,
                {
                  justifyContent: "space-evenly",
                },
              ]}
            >
              <Image
                source={item.img}
                style={{ width: "100%", height: 180, borderRadius: 5 }}
              />
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  rootScreen: { flex: 1 },
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // paddingHorizontal: 200,
    backgroundColor: "#cccac8",
  },

  imageHeader: {
    // backgroundColor: "#b6b4b6",
    marginBottom: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  imageContainer: {
    marginHorizontal: 10,
    backgroundColor: "white",
    // padding: width < 890 ? 10 : 25,
    // height: 260,
    borderRadius: 5,
    marginBottom: 25,
    width: width < 890 ? 300 : 440,
    alignItems: "center",
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 4,
  },

  imageName: {
    color: "#393838",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
