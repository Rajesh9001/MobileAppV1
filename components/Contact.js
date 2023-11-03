// Make Phone Call, Send SMS or Email Using React Native Communication
// https://aboutreact.com/make-phone-call-send-sms-or-email-using-react-native-communication/

// import React in our code
import React from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
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
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.widget, { paddingTop: 30, marginTop: 30 }]}>
        <Text style={[styles.widgetText, { fontSize: 18 }]}>
          Dr. Y.RavindraReddy
        </Text>
        <Text style={styles.widgetText}>
          Dept., of Livestock Production Management,
        </Text>
        <Text style={styles.widgetText}>College of Veterinary Science,</Text>
        <Text style={styles.widgetText}>Tirupati, Andhra Pradesh</Text>
        <Text style={styles.widgetText}>India - 517502.</Text>
      </View>

      <View style={[styles.widget, { paddingTop: 30 }]}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => Communications.phonecall("8919484364", true)}
        >
          <View style={styles.widgetRow}>
            <Text style={[styles.widgetText, { paddingBottom: 15 }]}>
              (0877) 2248621-313
            </Text>
            <Entypo name="phone" size={25} color={"#0b5791"} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => Communications.phonecall("8919484364", true)}
        >
          <View style={styles.widgetRow}>
            <Text style={[styles.widgetText, { paddingBottom: 15 }]}>
              Fax:0877-2249563
            </Text>
            <Entypo name="phone" size={25} color={"#0b5791"} />
          </View>
        </TouchableOpacity>

        {/* Mail: email(to, cc, bcc, subject, body) */}

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() =>
            Communications.email(
              ["yeddularavi88@gmail.com", "rajeshsirigiri9@gmail.com"],
              null,
              null,
              "Demo Subject",
              "Demo Content for the mail"
            )
          }
        >
          <View style={styles.widgetRow}>
            <Text style={[styles.widgetText, { paddingBottom: 15 }]}>
              yeddularavi88@gmail.com
            </Text>
            <Entypo name="mail" size={25} color={"#0b5791"} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => Communications.text("7013629249")}
        >
          <View style={styles.widgetRow}>
            <Text style={[styles.widgetText]}>Send a Text / Message</Text>
            <MaterialCommunityIcons
              name="message-reply-text-outline"
              size={25}
              color={"#0b5791"}
            />
          </View>
        </TouchableOpacity>

        {/* Web: web(address = null)*/}
        {/* <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => Communications.web("https://aboutreact.com")}
        >
          <Text style={styles.widgetText}>Open AboutReact</Text> 
        </TouchableOpacity>*/}
      </View>
      <View style={[styles.widget, styles.widgetRow, { alignItems: "center" }]}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() =>
            Communications.web("https://www.youtube.com/@dairyfarmaing677")
          }
        >
          <MaterialCommunityIcons name="youtube" size={30} color={"#c02710"} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => Communications.web("https://instagram.com")}
        >
          <Entypo name="instagram" size={23} color={"#9f0297"} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() =>
            Communications.web("https://holisticanimalfarming.com/")
          }
        >
          <MaterialCommunityIcons name="web" size={27} color={"#444343"} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => Communications.web("https://twitter.com")}
        >
          <Entypo name="twitter" size={25} color={"#12608a"} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => Communications.web("https://facebook.com")}
        >
          <Entypo name="facebook" size={24} color={"#085a86"} />
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
    backgroundColor: "#90c7ee",
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
});
