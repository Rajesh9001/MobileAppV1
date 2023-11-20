//https://github.com/Mudassirraza912/react-native-image-slider-banner
// https://www.youtube.com/watch?v=u4q3u3K8KY8

import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import { useContext } from "react";
import { Context } from "../store/Context";

import React, { cloneElement } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from "react-native";
import Press from "../ui/Press";

const emuList = [
  {
    id: 1,
    img: require("../assets/images/calf1.jpg"),
    description: "Dairy | Cattle",
    page: "CattleList",
  },
  {
    id: 2,
    img: require("../assets/images/Emu1.jpeg"),
    description: "Emu",
    page: "Emu",
  },
  {
    id: 3,
    img: require("../assets/images/sheep.jpg"),
    description: "Sheep",
    page: "Sheep",
  },
];

export default function Animals({ navigation }) {
  const context = useContext(Context);
  return (
    <SafeAreaView style={styles.screen}>
      {/* <Text>Hiii {context.city} Hiii</Text>
      <Text>{context.phoneNumber}</Text> */}
      <FlatList
        data={emuList}
        renderItem={({ item }) => (
          <Press page={item.page}>
            <View style={styles.videoContainer}>
              <View style={styles.videoHeader}>
                <Text style={styles.videoName}>{item.description}</Text>
              </View>
              <Image
                source={item.img}
                style={{ width: "85%", height: 190, borderRadius: 5 }}
              />
            </View>
          </Press>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  videoStyle: { margin: 15 },
  videoHeader: {
    backgroundColor: "#23ae62",
    marginBottom: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  videoContainer: {
    backgroundColor: "#23ae62",
    // padding: width < 890 ? 10 : 25,
    padding: 15,

    height: 270,
    borderRadius: 5,
    marginBottom: 25,
    width: width < 890 ? 330 : 440,
    alignItems: "center",
  },
  videoName: {
    color: "#f6f4f4",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
