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

const HydrophonicsList = [
  {
    id: 1,
    img: require("../../assets/images/Hydroponics1.jpeg"),
    description: "Various Stages of Hydroponic Grass Production",
  },
  {
    id: 2,
    img: require("../../assets/images/Hydroponics2.jpeg"),
    description: "sprouted maize grain",
  },
  {
    id: 3,
    img: require("../../assets/images/Hydroponics3.jpeg"),
    description: "sprouted maize grass in trays",
  },
  {
    id: 4,
    img: require("../../assets/images/Hydroponics4.jpeg"),
    description: "Hydrophonic grass trays in rows",
  },
  {
    id: 5,
    img: require("../../assets/images/Hydroponics5.jpeg"),
    description: "Rady to eat hydrophonic maize grass",
  },
  {
    id: 6,
    img: require("../../assets/images/Hydroponics6.jpeg"),
    description: "Shaded wet covering hydrophonic maize production",
  },
  {
    id: 7,
    img: require("../../assets/images/Hydroponics7.jpeg"),
    description: "Shaded wet covering hydrophonic maize production",
  },
];

export default function Hydrophonics({ navigation }) {
  return (
    <ScrollView
      // nestedScrollEnabled={true}
      //   stickyHeaderIndices={[0][1]}
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
            marginTop: 15,
          }}
        >
          Hydrophonics Technologies
        </Text>
        <Text
          style={{
            textAlign: "center",
            margin: 15,
            maxWidth: 340,
            fontWeight: "500",
          }}
        >
          <Text style={{ color: "#0a0505", fontSize: 16, fontWeight: "700" }}>
            Hydroponics fodder{" "}
          </Text>
          is production of greens with little moisture and nutrients to the
          growing plants. Hydroponic systems produce a greater yield over a
          shorter period of time in a smaller area than traditional fodder
          crops. The technology is mostly useful to the landless and marginal
          farmers of peri-urban where they have very less space for growing of
          fodders. The grains that are suitable are cereal grains such as Maize,
          Barley, Oats, Wheat, Jowar and legumes such as Lucerne, Clover and
          Cowpea.
        </Text>
        <FlatList
          data={HydrophonicsList}
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
