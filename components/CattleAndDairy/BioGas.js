import { Dimensions, Platform } from "react-native";
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

const biogasList = [
  {
    id: 1,
    img: require("../../assets/images/biogas1.jpeg"),
    description: "Small scale Bio-Gas unit",
  },
  {
    id: 2,
    img: require("../../assets/images/biogas2.jpeg"),
    description: "Bio-Gas Slurry",
  },
  {
    id: 3,
    img: require("../../assets/images/biogas3.jpeg"),
    description: "Large scale Bio-Gas Unit",
  },
  {
    id: 4,
    img: require("../../assets/images/biogas4.jpeg"),
    description: "Power from Bio-Gas",
  },
  {
    id: 5,
    img: require("../../assets/images/biogas5.jpeg"),
    description: "Bio-Gas Unit",
  },
  {
    id: 6,
    img: require("../../assets/images/biogas6.jpeg"),
    description: "Demonstration of Bio-Gas Unit",
  },
];

export default function BioGas({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text
        style={{
          color: "#9a0202",
          fontSize: 16,
          fontWeight: "bold",
          marginTop: 6,
        }}
      >
        Bio-Gas
      </Text>
      <Text
        style={{
          textAlign: "center",
          margin: 15,
          maxWidth: 340,
          fontWeight: "500",
        }}
      >
        Biogas typically refers to a mixture of different gases produced by the
        breakdown of organic matter in the absence of oxygen. Biogas can be
        produced from raw materials such as agricultural waste, manure,
        municipal waste, plant material, sewage, green waste or food waste.
        Biogas is a renewable energy source.
      </Text>
      <FlatList
        data={biogasList}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <View style={styles.imageHeader}>
              <Text style={styles.imageDescription}>{item.description}</Text>
            </View>
            <Image
              source={item.img}
              style={{
                width: "90%",
                height: 200,
              }}
            />
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
    marginHorizontal: Platform.OS === "android" ? 10 : 0,
  },

  imageHeader: {
    backgroundColor: "#979595",
    marginBottom: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  imageContainer: {
    backgroundColor: "#979595",
    padding: width < 890 ? 10 : 25,
    // paddingRight: 25,
    height: 280,
    borderRadius: 5,
    marginBottom: 25,
    width: width < 890 ? 340 : 440,
    alignItems: "center",
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 4,
  },
  imageDescription: {
    color: "#f6f4f4",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
