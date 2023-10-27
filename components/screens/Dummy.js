import {
  Button,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useState } from "react";
import PrimaryButton from "../../ui/PrimanyButton";
import Home from "./Welcome";
import App from "../../App";

function Dummy() {
  const [click, setClick] = useState(false);
  function clickedd() {
    setClick(true);
  }
  if (click) {
    <Home />;
  }
  return (
    // <View>
    //     <View style={styles.buttons}>
    //             <PrimaryButton style={styles.buttons} onPress={clickedd} >Dummy jjHere</PrimaryButton>
    //             <Text>Hi</Text>
    //             <Text>Hi</Text>

    //   </View>

    //   </View>
    <App />
  );
}

export default Dummy;

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
    flex: 1,
    height: 1000,
  },
});
