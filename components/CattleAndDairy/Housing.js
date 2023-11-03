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

const HousingList = [
  {
    id: 1,
    img: require("../../assets/images/Housing1.jpeg"),
    description: "Long view of animal shed",
  },
  {
    id: 2,
    img: require("../../assets/images/Housing2.jpeg"),
    description: "Tail to Tail housing asbestos roofing",
  },
  {
    id: 3,
    img: require("../../assets/images/Housing3.jpeg"),
    description: "Overhang to prevent rain",
  },
  {
    id: 4,
    img: require("../../assets/images/Housing4.jpeg"),
    description: "Tail to Tail system of housing.",
  },
  {
    id: 5,
    img: require("../../assets/images/Housing5.jpeg"),
    description: "Watering arrangements",
  },
  {
    id: 6,
    img: require("../../assets/images/housing13.jpeg"),
    description: "Chequered flooring to prevent slipping of animals",
  },
  {
    id: 7,
    img: require("../../assets/images/Housing7.jpeg"),
    description: "Head to Head system of housing.",
  },
  {
    id: 8,
    img: require("../../assets/images/Housing8.jpeg"),
    description: "Standing space with feeding and watering arrangements",
  },
  {
    id: 9,
    img: require("../../assets/images/Housing9.jpeg"),
    description: "Puff sheet roofing per temp control",
  },
  {
    id: 10,
    img: require("../../assets/images/Housing10.jpeg"),
    description: "Environmental housing for high yielding animals",
  },
  {
    id: 11,
    img: require("../../assets/images/Housing11.jpeg"),
    description: "Close view of puff sheet for reflecting radiation.",
  },

  {
    id: 12,
    img: require("../../assets/images/Housing12.jpeg"),
    description: "Loose housing system",
  },
];

export default function Housing({ navigation }) {
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
        Housing
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
          The provision of housing{" "}
        </Text>
        is necessary during adverse environmental conditions which buffer or
        neutralize climatic factors to reduce stress on their performance.The
        house system also depends on breed,age,physiologic status, climatic
        conditions etc.. {"\n\n"}The locally available housing materials should
        be procured to reduce cost. To a possible extent, the cost involved in
        housing should be minimum and more amount should be spared for feeding
        of animals.
      </Text>
      <FlatList
        data={HousingList}
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
