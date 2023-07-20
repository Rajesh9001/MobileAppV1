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
import { useEffect } from "react";
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
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import RecentWorks from "./RecentWorks";
import PrimaryButton from "./PrimanyButton";
import Home from "./Home";

function First() {
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
    <LinearGradient
      colors={["#5c56a4da", "#87d3238a", "#3773a8bd"]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("../assets/images/calf2.png")}
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          <View style={styles.container}>
            <Text style={styles.heading}>Holistic Animal Farming</Text>
            <Text style={styles.subHeading}>
              Aiming Nutritional Security of the farmers
            </Text>
            <Text style={styles.title}>Dr. Y Ravindra Reddy</Text>
            {/* <Button title="Enter" onPress={startHandler} /> */}
            {/* <View style={styles.buttons}>
              <PrimaryButton onPresss={startHandler}>Exit</PrimaryButton> */}
            {/* <PrimaryButton onPresss={startHandler}>Home</PrimaryButton> */}
            {/* </View> */}

            {/* <Home
              visible={modalIsVisible}
              name="Rajesh"
              onCancel={endAddGoalHandler}
            /> */}
          </View>
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

export default First;

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
