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

const ExtentionList = [
  {
    id: 1,
    img: require("../../assets/images/Extention1.jpeg"),
    description: "",
  },
  {
    id: 2,
    img: require("../../assets/images/Extention2.jpeg"),
    description: "",
  },
  {
    id: 3,
    img: require("../../assets/images/Extention3.jpeg"),
    description: "",
  },
  {
    id: 4,
    img: require("../../assets/images/Extention4.jpeg"),
    description: "",
  },
];

export default function Extention({ navigation }) {
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
      <View style={[styles.widget, { paddingTop: 30, marginTop: 30 }]}>
        <Text style={[styles.widgetText, { fontSize: 16 }]}>
          Book for sale in Telugu(Gorrela Pempakam lo Melakuvalu)(100 + 20
          Postage Cost = 120/-)
        </Text>
        <Text style={[styles.widgetText, { paddingTop: 10 }]}>
          Account No: 32963590053
        </Text>
        <Text style={styles.widgetText}>Name: YEDDULA RAVINDRA REDDY</Text>
        <Text style={styles.widgetText}>Ifsc: SBIN0010106 </Text>
        <Text style={styles.widgetText}>Branch Code: 10106.</Text>
      </View>
      <FlatList
        data={ExtentionList}
        numColumns={width > 400 ? 2 : 1}
        renderItem={({ item }) => (
          <View style={{ alignItems: "center" }}>
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
                style={{ width: "100%", height: 220, borderRadius: 5 }}
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
    backgroundColor: "#f7f4f4",
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
    shadowColor: "#2b8e60",
    shadowOpacity: 0.35,
    shadowOffset: { width: 4, height: 6 },
    shadowRadius: 4,
  },

  imageName: {
    color: "#393838",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  widget: {
    backgroundColor: "#98e0be",
    marginHorizontal: 25,
    marginBottom: 25,
    padding: 20,
    borderRadius: 10,
    width: "80%",
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 4,
  },
  widgetText: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
});
