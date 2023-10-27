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

const selectionList = [
  {
    id: 1,
    img: require("../../assets/images/selection1.jpeg"),
    description: "Picture of good dairy animal",
  },
  {
    id: 2,
    img: require("../../assets/images/selection2.jpeg"),
    description: "Wedge shaped body",
  },
  {
    id: 3,
    img: require("../../assets/images/selection3.jpeg"),
    description: "Smooth shining coat",
  },
  {
    id: 4,
    img: require("../../assets/images/selection4.jpeg"),
    description: "Short neck",
  },
  {
    id: 5,
    img: require("../../assets/images/selection5.jpeg"),
    description: "Large voluminous udder",
  },
  {
    id: 6,
    img: require("../../assets/images/selection6.jpeg"),
    description: "Squarely placed teats",
  },
  {
    id: 7,
    img: require("../../assets/images/selection7.jpeg"),
    description: "Good capillary network of blood vessels on udder",
  },
];

export default function SelectionOfGoodAnimals({ navigation }) {
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
        Selection of Good Animals
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
          selection{" "}
        </Text>
        of good animals is foundation for good milk production and viable dairy
        enterprise. The following pictures shows the points to be kept in mind
        during the process of selection.
      </Text>
      <FlatList
        data={selectionList}
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
