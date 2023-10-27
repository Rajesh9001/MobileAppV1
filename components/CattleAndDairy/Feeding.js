import { Dimensions } from "react-native";
import { ScrollView } from "react-native";
const { width, height } = Dimensions.get("window");

import React, { useCallback } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from "react-native";

const FeedingList = [
  {
    id: 1,
    img: require("../../assets/images/Feeding1.jpeg"),
    description: "Watering of animals (Rice washings is also a good practice).",
  },
  {
    id: 2,
    img: require("../../assets/images/Feeding2.jpeg"),
    description:
      "Green fodder on the bunds (Its only a supplementation to green fodder )",
  },

  {
    id: 4,
    img: require("../../assets/images/Feeding4.jpeg"),
    description: "Chaffed green Maize fodder.",
  },
  {
    id: 5,
    img: require("../../assets/images/Feeding3.jpeg"),
    description: "Paddy straw feeding",
  },
  {
    id: 6,
    img: require("../../assets/images/Feeding5.jpeg"),
    description: "Hay stack (Protect from fire hazards)",
  },
  {
    id: 7,
    img: require("../../assets/images/Feeding6.jpeg"),
    description: "Individual feeding of chaffed Hybrid Napier.",
  },
  {
    id: 8,
    img: require("../../assets/images/Feeding7.jpeg"),
    description: "Correct size of chaffed Maize.",
  },
  {
    id: 9,
    img: require("../../assets/images/Feeding8.jpeg"),
    description: "Sunflower cake.",
  },
  {
    id: 10,
    img: require("../../assets/images/Feeding9.jpeg"),
    description: "Unchaffed green fodder not a good practice",
  },
];

export default function FeedingProduction({ navigation }) {
  const renderItem = useCallback(
    ({ item }) => (
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
    ),
    []
  );
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
        Feeding
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
          Feeding{" "}
        </Text>
        accounts for 70% of the total cost of the milk production. The feeding
        of dairy animal should consist of green fodders, dry fodders and
        concentrate mixture. These three types of feeds should be fed every day.
        The daily allowance of feeding per animal is approximately 25-30 kg of
        green fodder, 6-8 kg of dry fodder (paddy straw) and 2.5 kg of
        concentrate mixture is required for every kg of milk produced by the
        animal.
      </Text>
      <FlatList
        data={FeedingList}
        numColumns={width > 400 ? 2 : 1}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
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
    shadowColor: "#9b0e7e",
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
