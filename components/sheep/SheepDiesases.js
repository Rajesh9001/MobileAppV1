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

const sheepList = [
  {
    id: 1,
    img: require("../../assets/images/sheep12.jpeg"),
    description: "Sheep Pox",
  },
  {
    id: 2,
    img: require("../../assets/images/sheep13.jpeg"),
    description: "Sheep Pox",
  },
  {
    id: 3,
    img: require("../../assets/images/sheep14.jpeg"),
    description: "Sheep Pox",
  },
  {
    id: 4,
    img: require("../../assets/images/sheep15.jpeg"),
    description: "Sheep Pox",
  },
  {
    id: 5,
    img: require("../../assets/images/sheep16.jpeg"),
    description: "Tetanus",
  },
  {
    id: 6,
    img: require("../../assets/images/sheep17.jpeg"),
    description: "Tetanus",
  },
  {
    id: 7,
    img: require("../../assets/images/sheep11.jpeg"),
    description: "Tetanus-bulged eye ball and sawhorse appearance.",
  },
];

export default function SheepDiesases({ navigation }) {
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
        Diseases
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
          Morbidity and mortality{" "}
        </Text>
        are the two important factors resulting in heavy losses in sheep
        production and improvement programmes. Prevention is always better than
        cure as it is a lot cheaper. This has special significance with sheep as
        they seem to respond less to treatment when sick than other livestock
        species.
      </Text>
      <FlatList
        data={sheepList}
        renderItem={({ item }) => (
          <View style={styles.videoContainer}>
            <View style={styles.videoHeader}>
              <Text style={styles.videoName}>{item.description}</Text>
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

  videoHeader: {
    backgroundColor: "#948181",
    marginBottom: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  videoContainer: {
    backgroundColor: "#948181",
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
