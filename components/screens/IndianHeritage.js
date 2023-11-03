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

const heritageList = [
  {
    id: 1,
    img: require("../../assets/images/heritage1.jpeg"),
    description: "",
  },
  {
    id: 2,
    img: require("../../assets/images/heritage2.jpeg"),
    description: "",
  },
  {
    id: 3,
    img: require("../../assets/images/heritage3.jpeg"),
    description: "",
  },
  {
    id: 4,
    img: require("../../assets/images/heritage4.jpeg"),
    description: "",
  },
  {
    id: 5,
    img: require("../../assets/images/heritage5.jpeg"),
    description: "",
  },
  {
    id: 6,
    img: require("../../assets/images/heritage6.jpeg"),
    description: "",
  },
  {
    id: 7,
    img: require("../../assets/images/heritage7.jpeg"),
    description: "",
  },
  {
    id: 8,
    img: require("../../assets/images/heritage8.jpeg"),
    description: "",
  },
  {
    id: 9,
    img: require("../../assets/images/heritage9.jpeg"),
    description: "",
  },
  {
    id: 10,
    img: require("../../assets/images/heritage10.jpeg"),
    description: "",
  },
  {
    id: 11,
    img: require("../../assets/images/heritage11.jpeg"),
    description: "",
  },
  {
    id: 12,
    img: require("../../assets/images/heritage12.jpeg"),
    description: "",
  },
  {
    id: 13,
    img: require("../../assets/images/heritage13.jpeg"),
    description: "",
  },
  {
    id: 14,
    img: require("../../assets/images/heritage14.jpeg"),
    description: "",
  },
  {
    id: 15,
    img: require("../../assets/images/heritage15.jpeg"),
    description: "",
  },
  {
    id: 16,
    img: require("../../assets/images/heritage16.jpeg"),
    description: "",
  },
  {
    id: 17,
    img: require("../../assets/images/heritage17.jpeg"),
    description: "",
  },
  {
    id: 18,
    img: require("../../assets/images/heritage18.jpeg"),
    description: "",
  },
  {
    id: 19,
    img: require("../../assets/images/heritage19.jpeg"),
    description: "",
  },
  {
    id: 20,
    img: require("../../assets/images/heritage20.jpeg"),
    description: "",
  },
];

export default function IndianHeritage({ navigation }) {
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
          textAlign: "center",
          margin: 15,
          maxWidth: 340,
          fontWeight: "500",
          marginVertical: 30,
        }}
      >
        {" "}
        <Text
          style={{
            color: "#9a0202",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          'India'{" "}
        </Text>
        is inherited with 34 breeds of Indigenous cattle over generations. The
        Indigenous breeds are selected by nature for their heat tolerance,
        disease resistance and conversion of crop residues into wholesome milk.
        There is dire need to protect all the Indigenous breeds. The following
        pictures will give an idea of some of the Indigenous breeds.
      </Text>
      <FlatList
        data={heritageList}
        numColumns={width > 400 ? 2 : 1}
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
