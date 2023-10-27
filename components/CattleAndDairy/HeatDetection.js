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

const HeatList = [
  {
    id: 1,
    img: require("../../assets/images/Heat1.jpeg"),
    description: "Different stages of heat",
  },
  {
    id: 2,
    img: require("../../assets/images/Heat2.jpeg"),
    description: "Different stages of heat",
  },
  {
    id: 3,
    img: require("../../assets/images/Heat3.jpeg"),
    description: "Different stages of heat",
  },
];

export default function HeatDetection({ navigation }) {
  return (
    // <ScrollView
    //   // nestedScrollEnabled={true}
    //   // stickyHeaderIndices={[0]}
    //   showsVerticalScrollIndicator={false}
    //   // style={styles.container}
    //   // horizontal={true}
    //   // vertical={true}
    // >
    <View style={styles.screen}>
      <Text
        style={{
          color: "#9a0202",
          fontSize: 18,
          fontWeight: "bold",
          marginTop: 16,
        }}
      >
        Heat Detection
      </Text>
      <Text
        style={{
          textAlign: "center",
          margin: 15,
          maxWidth: 340,
          fontWeight: "500",
        }}
      >
        <Text style={{ color: "#2d2121", fontSize: 16, fontWeight: "600" }}>
          A good{" "}
        </Text>
        record keeping gives an idea when the cow is expected to come in heat
        based on the fact that the average cow comes in heat every 21 days. A
        cow should be observed twice daily, once in early morning and once in
        the late evening for signs of heat between 17-18 days after last oestrus
        cycle. Some of the heat symptoms or bellowing, frequent urination,
        smelling other cows white mucous discharge from vulva and attempts to
        mount other cows.
      </Text>
      <FlatList
        data={HeatList}
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
    // </ScrollView>
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
    shadowColor: "#0e9b54",
    shadowOpacity: 0.45,
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
