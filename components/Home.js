import {
  Button,
  Image,
  ImageBackground,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { LinearGradient } from "expo-linear-gradient";
import RecentWorks from "./RecentWorks";
import { useState } from "react";
import { PrimaryButton } from "./PrimanyButton";
import MyDrawer from "./MyDrawer";

function Home({ visible, name, onCancel }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [isRecentWorksClick, setIsRecentWorksClick] = useState(false);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  function clicked() {
    setIsRecentWorksClick(true);
  }

  return (
    // <Modal visible={visible} animationType="slide">
    //   {/* <Drawer.Navigator>
    //     <Drawer.Screen name="Feed" component={PrimaryButton} />
    //     <Drawer.Screen name="Article" component={RecentWorks} />
    //   </Drawer.Navigator> */}
    //   <LinearGradient colors={["#5c56a4da", "#87d3238a", "#3773a8bd"]}>
    //     <ImageBackground
    //       source={require("../assets/images/calf2.jpg")}
    //       resizeMode="cover"
    //       imageStyle={styles.backgroundImage}
    //     >
    //       <SafeAreaView>
    //         {/* <View style={styles.a}> */}
    //         <View style={styles.a}>
    //           <Text style={styles.title} onPress={clicked}>
    //             Recent works
    //           </Text>
    //         </View>
    //         {/* {isRecentWorksClick && <RecentWorks />} */}
    //       </SafeAreaView>
    //     </ImageBackground>
    //   </LinearGradient>
    // </Modal>
    <MyDrawer />
  );
}

export default Home;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    height: "100%",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
    borderRadius: 50,
  },
  cardPic: {
    width: "100%",
    height: 200,
    margin: 20,
    opacity: 1,
    borderRadius: 5,
  },
  cardPicContainer: {
    flex: 1,
    width: "90%",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },

  backgroundImage: {
    opacity: 0.3,
    flex: 1,
  },
  cardTitle: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 5,
    paddingHorizontal: 20,
  },
  title: {
    // flex: 1,
    // height:'100%',
    fontSize: 22,
    fontWeight: "bold",
    color: "#f9fbf6",
    borderColor: "#5c5a5a",
    borderWidth: 1,
    backgroundColor: "#6eb574b6",
    // width: '50%',
    padding: 2,
    paddingHorizontal: 10,
    textAlign: "center",
    opacity: 0.95,
    borderRadius: 5,
  },
  cardText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 500,
    textAlign: "center",
    paddingHorizontal: 5,
  },
  card: {
    flex: 1,
    borderColor: "#797878",
    borderWidth: 1,
    elevation: 2,
    // opacity: 0.75,
    borderRadius: 5,
    backgroundColor: "white",
    width: "100%",
    margin: 10,
  },
  a: {
    marginTop: 10,
    alignItems: "center",
  },
  rootScreen: {
    flex: 1,
  },
});
