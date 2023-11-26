import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import { ScrollView } from "react-native-virtualized-view";

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

const AzollaList = [
  {
    id: 1,
    img: require("../../assets/images/Azolla1.jpeg"),
    description: "Demonstration of Azolla pit preparation",
  },
  {
    id: 2,
    img: require("../../assets/images/Azolla2.jpeg"),
    description: "Covering of plastic sheet in Azolla pit",
  },
  {
    id: 3,
    img: require("../../assets/images/Azolla3.jpeg"),
    description: "Adding Azolla culture to pit",
  },
  {
    id: 4,
    img: require("../../assets/images/Azolla4.jpeg"),
    description:
      "Covering of Azolla pit with Mosquito net to prevent tree leaves into Azolla pit",
  },
  {
    id: 5,
    img: require("../../assets/images/Azolla5.jpeg"),
    description: "Fully grown Azolla",
  },
  {
    id: 6,
    img: require("../../assets/images/Azolla6.jpeg"),
    description: "Mat of Azolla",
  },
  {
    id: 7,
    img: require("../../assets/images/Azolla7.jpeg"),
    description: "Feeding of Azolla with concentrate mixture by crossbred cow.",
  },
  {
    id: 8,
    img: require("../../assets/images/Azolla8.jpeg"),
    description: "Feeding of Azolla to Ramlambs",
  },
  {
    id: 9,
    img: require("../../assets/images/Azolla9.jpeg"),
    description: "Feeding to poultry",
  },
  {
    id: 10,
    img: require("../../assets/images/Azolla10.jpeg"),
    description: "Azolla in Paddy Field",
  },
  {
    id: 11,
    img: require("../../assets/images/Azolla11.jpeg"),
    description: "Large scale production of Azolla",
  },

  {
    id: 12,
    img: require("../../assets/images/Azolla12.jpeg"),
    description: "Training on Azolla production",
  },
];

export default function Azolla({ navigation }) {
  return (
    <ScrollView
      // nestedScrollEnabled={true}
      // stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
      // style={styles.container}
      // horizontal={true}
      // vertical={true}
    >
      <View style={styles.screen}>
        <Text
          style={{
            color: "#9a0202",
            fontSize: 18,
            fontWeight: "bold",
            marginTop: 16,
          }}
        >
          Azolla Production Technologies
        </Text>
        <Text
          style={{
            textAlign: "center",
            margin: 15,
            maxWidth: 340,
            fontWeight: "500",
          }}
        >
          <Text style={{ color: "#140909", fontSize: 16, fontWeight: "600" }}>
            It{" "}
          </Text>
          is nothing but a free floating water fern consisting of a short,
          branched, floating stem, bearing roots which hang down in the water.
          It's kind of greenfodder grown on water surface{" "}
        </Text>
        <FlatList
          data={AzollaList}
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
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  rootScreen: { flex: 1 },
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // paddingHorizontal: 200,
    backgroundColor: "white",
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
