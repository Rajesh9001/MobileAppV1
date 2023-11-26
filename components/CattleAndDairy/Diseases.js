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

const diesasesList = [
  {
    id: 1,
    img: require("../../assets/images/diesases1.jpeg"),
    description: "",
  },
  {
    id: 2,
    img: require("../../assets/images/diesases2.jpeg"),
    description: "",
  },
  {
    id: 3,
    img: require("../../assets/images/diesases3.jpeg"),
    description: "",
  },
  {
    id: 4,
    img: require("../../assets/images/diesases7.jpeg"),
    description: "",
  },
  {
    id: 5,
    img: require("../../assets/images/diesases5.jpeg"),
    description: "",
  },
  {
    id: 6,
    img: require("../../assets/images/diesases6.jpeg"),
    description: "",
  },
  {
    id: 7,
    img: require("../../assets/images/diesases4.jpeg"),
    description: "",
  },
];

export default function Diseases({ navigation }) {
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
        The Diseases of dairy cattle are bacterial, viral, parasitic etc. The
        following pictures are occurrence of Foot and Mouth Diseases in Dairy
        Cattle.
      </Text>
      <FlatList
        data={diesasesList}
        //numColumns={width > 400 ? 2 : 1}
        renderItem={({ item }) => (
          <View style={{ alignItems: "center" }}>
            {/* <View style={styles.imageHeader}>
              <Text style={styles.imageName}>{item.description}</Text>
            </View> */}
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
    shadowColor: "#c12299",
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
