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

const healthList = [
  {
    id: 1,
    img: require("../../assets/images/health1.jpeg"),
    description: "Timely Vaccination of goat",
  },
  {
    id: 2,
    img: require("../../assets/images/health2.jpeg"),
    description: "Vaccination with sterilized Needle",
  },
  {
    id: 3,
    img: require("../../assets/images/health3.jpeg"),
    description: "Dipping Tank",
  },
  {
    id: 4,
    img: require("../../assets/images/health4.jpeg"),
    description: "Dip solution for dipping of sheep",
  },
  {
    id: 5,
    img: require("../../assets/images/health5.jpeg"),
    description: "Standing pen",
  },
  {
    id: 6,
    img: require("../../assets/images/health6.jpeg"),
    description: "Dipping Tank Proper",
  },
  {
    id: 7,
    img: require("../../assets/images/health7.jpeg"),
    description: "Draining pen",
  },
  {
    id: 8,
    img: require("../../assets/images/health8.jpeg"),
    description: "Spraying for Tick controller",
  },
];

export default function HealthCare({ navigation }) {
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
        Deworming & Deticking
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
          The healthcare of sheep{" "}
        </Text>
        can be taken care of buy proper Deworming & Deticking. While Deworming
        of sheep flock , correct dose and type of drug is most important. Under
        dosing and over dosing is more harmful. Compulsorily take advice from
        Veterinary doctor regarding selection and dosage of drug. The following
        practices will help in maintaining heath and production of flock.
      </Text>
      <FlatList
        data={healthList}
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
    backgroundColor: "#5c995e",
    marginBottom: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  imageContainer: {
    backgroundColor: "#5c995e",
    padding: width < 890 ? 10 : 25,
    height: 260,
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
