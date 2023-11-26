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

import { useContext, useEffect } from "react";
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

import LoginScreen from "../../loginCred/LoginScreen";
import { AuthContext } from "../../store/auth-context";

function First({ navigation }) {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const authCtx = useContext(AuthContext);
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
    setTimeout(() => {
      // navigation.replace("Otp");
      navigation.replace("Drawer");
      // navigation.replace("Login");
    }, 2000);
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
        source={require("../../assets/images/calf2.jpg")}
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          <View style={styles.container}>
            <Text style={[styles.title, { fontSize: 18 }]}>
              Welcome {authCtx.otpLoginName}
            </Text>
            <Text style={styles.heading}>Holistic Animal Farming</Text>
            <Text style={styles.subHeading}>
              Aiming Nutritional Security of the farmers
            </Text>
            <Text style={styles.title}>Dr. Y Ravindra Reddy</Text>
            {/* <Button
              onPress={() => navigation.navigate("Drawer")}
              title="Go to Home"
            /> */}
          </View>
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

export default First;

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
