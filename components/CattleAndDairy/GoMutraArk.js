import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import { ScrollView } from "react-native";

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

const goMutraList = [
  {
    id: 1,
    img: require("../../assets/images/goMutra1.jpeg"),
  },
  {
    id: 2,
    img: require("../../assets/images/goMutra2.jpeg"),
  },
  {
    id: 3,
    img: require("../../assets/images/goMutra3.jpeg"),
  },
  {
    id: 4,
    img: require("../../assets/images/goMutra4.jpeg"),
  },
  {
    id: 5,
    img: require("../../assets/images/goMutra5.jpeg"),
  },
  {
    id: 6,
    img: require("../../assets/images/goMutra6.jpeg"),
  },
  {
    id: 7,
    img: require("../../assets/images/goMutra7.jpeg"),
  },
  {
    id: 8,
    img: require("../../assets/images/goMutra8.jpeg"),
  },
  {
    id: 9,
    img: require("../../assets/images/goMutra9.jpeg"),
  },
  {
    id: 10,
    img: require("../../assets/images/goMutra10.jpeg"),
  },
  {
    id: 11,
    img: require("../../assets/images/goMutra11.jpeg"),
  },

  {
    id: 12,
    img: require("../../assets/images/goMutra12.jpeg"),
  },
  {
    id: 13,
    img: require("../../assets/images/goMutra13.jpeg"),
  },
  {
    id: 14,
    img: require("../../assets/images/goMutra14.jpeg"),
  },
  {
    id: 15,
    img: require("../../assets/images/goMutra15.jpeg"),
  },
  {
    id: 16,
    img: require("../../assets/images/goMutra16.jpeg"),
  },
  {
    id: 17,
    img: require("../../assets/images/goMutra17.jpeg"),
  },
  {
    id: 18,
    img: require("../../assets/images/goMutra18.jpeg"),
  },
  {
    id: 19,
    img: require("../../assets/images/goMutra19.jpeg"),
  },
  {
    id: 20,
    img: require("../../assets/images/goMutra20.jpeg"),
  },
];

export default function GoMutraArk({ navigation }) {
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
        GoMutra Ark
      </Text>
      <Text
        style={{
          textAlign: "center",
          margin: 15,
          maxWidth: 340,
          fontWeight: "500",
        }}
      >
        <Text style={{ color: "#2d2121", fontSize: 16, fontWeight: "900" }}>
          GoMutra Ark{" "}
        </Text>
        is an age old ayurvedic treatment method prepared from
        Indigenous(Indian) cattle urine. Different methods of preparation of
        Gomutra Ark are shown below.{" "}
      </Text>
      <FlatList
        data={goMutraList}
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
