// Make Phone Call, Send SMS or Email Using React Native Communication
// https://aboutreact.com/make-phone-call-send-sms-or-email-using-react-native-communication/

// import React in our code
import React from "react";
import { useState, useContext } from "react";
import { Alert } from "react-native";
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AuthContext } from "../store/auth-context";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

// 1. Either import the whole module
import Communications from "react-native-communications";
import Icon from "../ui/Icons";
/* 2. Or import single methods
 import {
  phonecall,
  email,
  text,
  web
} from 'react-native-communications';*/

const Profile = () => {
  const [subject, setSubject] = useState();
  const [feedBack, setFeedBack] = useState();
  const authCtx = useContext(AuthContext);
  const mail = authCtx.Gmail == null ? "*****@gmail.com" : authCtx.Gmail;
  const name = authCtx.otpLoginName == null ? "*****" : authCtx.otpLoginName;
  const phone = authCtx.phoneNumber == null ? "*********" : authCtx.phoneNumber;
  const sendVerification = () => {
    setSubject("");
    setFeedBack("");
    Alert.alert("Thank you for submitting valuable feedback");
  };

  return (
    <ImageBackground
      source={require("../assets/images/background2.webp")}
      style={styles.rootScreen}
      resizeMode="cover"
      imageStyle={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <View style={[styles.widget, { paddingTop: 30, marginTop: 30 }]}>
          <Text style={styles.otpText}>Details</Text>
          <Text style={styles.widgetText}>Name : {name}</Text>
          <Text style={styles.widgetText}>Email : {mail}</Text>
          <Text style={styles.widgetText}>Phone Number : {phone}</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
    padding: 10,
  },
  widget: {
    backgroundColor: "rgba(114, 146, 189, 0.6)",
    marginHorizontal: 25,
    marginBottom: 25,
    padding: 20,
    borderRadius: 10,
    paddingBottom: 50,
  },
  widgetText: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },

  widgetRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
  textInput: {
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    fontSize: 18,
    borderBottomColor: "#fff",
    textAlign: "justify",
    color: "#000",
  },
  sendVerification: {
    padding: 10,
    backgroundColor: "#3498db",
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    // width: 200,
  },
  sendVerification: {
    padding: 10,
    backgroundColor: "#3498db",
    borderRadius: 10,
    marginBottom: 20,
    textAlign: "center",
  },
  otpText: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  backgroundImage: {
    opacity: 0.4,
  },
  rootScreen: {
    flex: 1,
  },
});
