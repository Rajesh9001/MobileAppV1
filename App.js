import {
  Button,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  PlayfairDisplay_400Regular,
  PlayfairDisplay_400Regular_Italic,
  PlayfairDisplay_500Medium,
  PlayfairDisplay_500Medium_Italic,
  PlayfairDisplay_600SemiBold,
  PlayfairDisplay_600SemiBold_Italic,
  PlayfairDisplay_700Bold,
  PlayfairDisplay_700Bold_Italic,
  PlayfairDisplay_800ExtraBold,
  PlayfairDisplay_800ExtraBold_Italic,
  PlayfairDisplay_900Black,
  PlayfairDisplay_900Black_Italic,
  useFonts,
} from "@expo-google-fonts/playfair-display";
import * as SplashScreen from "expo-splash-screen";

import Home from "./components/Home";
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from "./components/PrimanyButton";
import MyDrawer from "./components/MyDrawer";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_500Medium,
    PlayfairDisplay_600SemiBold,
    PlayfairDisplay_700Bold,
    PlayfairDisplay_800ExtraBold,
    PlayfairDisplay_900Black,
    PlayfairDisplay_400Regular_Italic,
    PlayfairDisplay_500Medium_Italic,
    PlayfairDisplay_600SemiBold_Italic,
    PlayfairDisplay_700Bold_Italic,
    PlayfairDisplay_800ExtraBold_Italic,
    PlayfairDisplay_900Black_Italic,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  function startHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }
  return (
    <MyDrawer />
    // <LinearGradient
    //   colors={["#5c56a4da", "#87d3238a", "#3773a8bd"]}
    //   style={styles.rootScreen}
    // >
    //   <ImageBackground
    //     source={require("./assets/images/calf2.png")}
    //     style={styles.rootScreen}
    //     resizeMode="cover"
    //     imageStyle={styles.backgroundImage}
    //   >
    //     <SafeAreaView style={styles.rootScreen}>
    //       <View style={styles.container}>
    //         <Text style={styles.heading}>Holistic Animal Farming</Text>
    //         <Text style={styles.subHeading}>
    //           Aiming Nutritional Security of the farmers
    //         </Text>
    //         <Text style={styles.title}>Dr. Y Ravindra Reddy</Text>
    //         {/* <Button title="Enter" onPress={startHandler} /> */}
    //         <View style={styles.buttons}>
    //           <PrimaryButton onPresss={startHandler}>Exit</PrimaryButton>
    //           <PrimaryButton onPresss={startHandler}>Home</PrimaryButton>
    //         </View>

    //         <Home
    //           visible={modalIsVisible}
    //           name="Rajesh"
    //           onCancel={endAddGoalHandler}
    //         />
    //       </View>
    //     </SafeAreaView>
    //   </ImageBackground>
    // </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 25,
    color: "#147709",
    fontFamily: "PlayfairDisplay_800ExtraBold",
  },
  subHeading: {
    color: "black",
    fontSize: 14,
    fontFamily: "PlayfairDisplay_700Bold",
  },
  title: {
    color: "black",
    marginVertical: 4,
    fontFamily: "PlayfairDisplay_500Medium_Italic",
    fontSize: 20,
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.3,
  },
  buttons: {
    flexDirection: "row",
  },
});
