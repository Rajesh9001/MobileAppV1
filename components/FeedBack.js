// Make Phone Call, Send SMS or Email Using React Native Communication
// https://aboutreact.com/make-phone-call-send-sms-or-email-using-react-native-communication/

// import React in our code
import React from "react";
import { useState } from "react";
import { Alert } from "react-native";
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
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

const Contact = () => {
  const [subject, setSubject] = useState();
  const [feedBack, setFeedBack] = useState();

  const sendVerification = () => {
    setSubject("");
    setFeedBack("");
    Alert.alert("Thank you for submitting valuable feedback");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.widget, { paddingTop: 30, marginTop: 30 }]}>
        <Text style={styles.otpText}>FeedBack</Text>
        <TextInput
          placeholder="Subject"
          // onChangeText={updateName}
          value={subject}
          onChangeText={(Subject) => {
            setSubject(Subject);
          }}
          color="black"
          backgroundColor="white"
          style={styles.textInput}
        />

        <TextInput
          placeholder="Enter Feedback"
          // onChangeText={updatePhoneNumber}
          value={feedBack}
          onChangeText={(feedBack) => {
            setFeedBack(feedBack);
          }}
          // keyboardType="phone-pad"
          autoCompleteType="tel"
          color="black"
          backgroundColor="white"
          style={[styles.textInput, { height: 100 }]}
          multiline={true}
          numberOfLines={4}
        />
        <TouchableOpacity
          style={styles.sendVerification}
          onPress={sendVerification}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  widget: {
    backgroundColor: "#a1ceee",
    marginHorizontal: 25,
    marginBottom: 25,
    padding: 20,
    borderRadius: 10,
    // paddingTop: 30,
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
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
});
