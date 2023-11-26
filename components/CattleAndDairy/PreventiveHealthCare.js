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

const preventiveList = [
  {
    id: 1,
    img: require("../../assets/images/preventive1.jpeg"),
    description: "Correct dosage is important for spraying.",
  },
  {
    id: 2,
    img: require("../../assets/images/preventive2.jpeg"),
    description: "Vaccination of cattle.",
  },
  {
    id: 3,
    img: require("../../assets/images/preventive3.jpeg"),
    description: "Spraying of crossbred cow",
  },
  {
    id: 4,
    img: require("../../assets/images/preventive4.jpeg"),
    description: "Vaccination of buffaloe",
  },
];

export default function PreventiveHealthCare({ navigation }) {
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
        Preventive Health Care
      </Text>
      <Text
        style={{
          textAlign: "center",
          margin: 15,
          maxWidth: 340,
          fontWeight: "500",
        }}
      >
        {" "}
        <Text style={{ color: "#2d2121", fontSize: 16, fontWeight: "600" }}>
          Prevention is better than cure.{" "}
        </Text>
        The animals are to be protected against external and internal parasites,
        apart from infectious diseases. All the animals in the herd and all the
        animals in the villages are to be protected against infectious diseases
        by timely vaccination every year without fail. The animals are protected
        from ticks, mites, lice by spraying.
      </Text>
      <FlatList
        data={preventiveList}
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
