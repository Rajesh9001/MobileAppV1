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

const practiceList = [
  {
    id: 1,
    img: require("../../assets/images/practice1.jpeg"),
    description: "Adequate feeding and watering space.",
  },
  {
    id: 2,
    img: require("../../assets/images/practice2.jpeg"),
    description: "Watering at all timings is needed",
  },
  {
    id: 3,
    img: require("../../assets/images/practice3.jpeg"),
    description: "Creep feeding at one month for better growth.",
  },
  {
    id: 4,
    img: require("../../assets/images/practice4.jpeg"),
    description: "Grazing for alleast 6 to 8 hours",
  },
  {
    id: 5,
    img: require("../../assets/images/practice5.jpeg"),
    description: "Group feeding of same age group",
  },
  {
    id: 6,
    img: require("../../assets/images/practice6.jpeg"),
    description: "Raised / slatted floor system of housing",
  },
  {
    id: 7,
    img: require("../../assets/images/practice7.jpeg"),
    description: "Semi intensive management",
  },
  {
    id: 8,
    img: require("../../assets/images/practice8.jpeg"),
    description: "Do not allow drinking in stagnant water",
  },
];

export default function BestPractices({ navigation }) {
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
        Best Management Practices
      </Text>
      <Text
        style={{
          textAlign: "center",
          margin: 15,
          maxWidth: 340,
          fontWeight: "500",
        }}
      >
        The best management practices include providing adequate in housing of
        sheep and grazing for period of 6-8 hours per day. The feeding of creep
        feed, colostrum, neem leaves etc. for better growth of lambs and the
        lambs should be kept in the shed or enclosure for atleast 2 1/2 month
        and not allowed for grazing with mothers. Do not allow animals for
        watering in stagnant ponds/lakes, water tanks.
      </Text>
      <FlatList
        data={practiceList}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <View style={styles.imageHeader}>
              <Text style={styles.imageDescription}>{item.description}</Text>
            </View>
            <Image source={item.img} style={{ width: "90%", height: 200 }} />
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
    backgroundColor: "#948181",
    marginBottom: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  imageContainer: {
    backgroundColor: "#948181",
    padding: width < 890 ? 10 : 25,
    height: 280,
    borderRadius: 5,
    marginBottom: 25,
    width: width < 890 ? 360 : 440,
    alignItems: "center",
  },
  imageDescription: {
    color: "#f6f4f4",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
