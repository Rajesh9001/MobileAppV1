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

const SahiwalList = [
  {
    id: 1,
    img: require("../../assets/images/Sahiwal1.jpeg"),
    description: "",
  },
  {
    id: 2,
    img: require("../../assets/images/Sahiwal2.jpeg"),
    description: "",
  },
  {
    id: 3,
    img: require("../../assets/images/Sahiwal3.jpeg"),
    description: "",
  },
  {
    id: 4,
    img: require("../../assets/images/Sahiwal4.jpeg"),
    description: "",
  },
  {
    id: 5,
    img: require("../../assets/images/Sahiwal5.jpeg"),
    description: "",
  },
  {
    id: 6,
    img: require("../../assets/images/Sahiwal6.jpeg"),
    description: "",
  },
  {
    id: 7,
    img: require("../../assets/images/Sahiwal7.jpeg"),
    description: "",
  },
  {
    id: 8,
    img: require("../../assets/images/Sahiwal8.jpeg"),
    description: "",
  },
];

export default function SahiwalCalves({ navigation }) {
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
        Sahiwal
      </Text> */}
      <Text
        style={{
          textAlign: "center",
          margin: 15,
          maxWidth: 340,
          fontWeight: "500",
        }}
      >
        <Text style={{ color: "#6c0606", fontSize: 16, fontWeight: "600" }}>
          Sahiwal{" "}
        </Text>
        is a breed of Zebu cattle which primarily is used in dairy production.
        Sahiwal originated from the Sahiwal district of Punjab province in
        Pakistan. Good Management of Sahiwal calves at LPM Department, College
        of Veterinary College Tirupati.
      </Text>
      <FlatList
        data={SahiwalList}
        numColumns={width > 400 ? 2 : 1}
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
