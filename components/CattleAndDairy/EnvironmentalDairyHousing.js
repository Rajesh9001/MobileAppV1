import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import { ScrollView } from "react-native-virtualized-view";

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

const environmentalList = [
  {
    id: 1,
    img: require("../../assets/images/environmental1.jpeg"),
    description: "kankrej cattle",
  },
  {
    id: 2,
    img: require("../../assets/images/environmental2.jpeg"),
    description: "kankrej cattle in Festivals",
  },
  {
    id: 3,
    img: require("../../assets/images/environmental3.jpeg"),
    description: "Pungunur cattle",
  },
  {
    id: 4,
    img: require("../../assets/images/environmental4.jpeg"),
    description: "Punganur cattle family",
  },
  {
    id: 5,
    img: require("../../assets/images/environmental5.jpeg"),
    description: "kankrej  in compantion with punganur ",
  },
  {
    id: 6,
    img: require("../../assets/images/environmental6.jpeg"),
    description: " kankrej in compantion with punganur ",
  },
  {
    id: 7,
    img: require("../../assets/images/environmental7.jpeg"),
    description: "A pair of Ongole bulls",
  },
  {
    id: 8,
    img: require("../../assets/images/environmental8.jpeg"),
    description: "Ongole breed known for its majesty",
  },
];

export default function EnvironmentalDairyHousing({ navigation }) {
  return (
    <ScrollView
    // nestedScrollEnabled={true}
    // stickyHeaderIndices={[0]}
    // showsVerticalScrollIndicator={false}
    // style={styles.container}
    // horizontal={true}
    // vertical={true}
    >
      <View>
        <Text
          style={{
            color: "#9a0202",
            fontSize: 18,
            fontWeight: "bold",
            paddingTop: 16,
            textAlign: "center",
            backgroundColor: "#fff",
          }}
        >
          Environmental Dairy Housing{"\n"} Technologies
        </Text>
      </View>

      <View style={styles.screen}>
        <Text
          style={{
            // textAlign: "center",
            margin: 15,
            maxWidth: 340,
            fontWeight: "500",
          }}
        >
          <Text
            style={{
              color: "#0b0606",
              fontSize: 16,
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            An integrated approach{" "}
          </Text>
          was made in the model project on the “Environmentally Controlled
          Housing for Dairy cattle “designed at Dairy Experimental Station,dept.
          of LPM, College of Veterinary Science, under Sri Venkateswara
          Veterinary University, Tirupati.{"\n\n"}The environmentally controlled
          dairy housing model was designed by giving due consideration to
          orientation of shed, roof projection and microenvironment of the
          animal by providing cooling system besides comfort to the animal and
          reducing the labour costs involve in feeding and management. The micro
          environment around the animal is modified by to increase the heat
          dissipation and cooling the air around the animal to reduce the heat
          load and stress on the animal.{"\n\n"}The various components of the
          designed model installed are{"\n"} 1. Free stall system
          {"\n"} 2. Rubberized Mattress{"\n"} 3. Cooling Pads 4. Exhaust Fans
          {"\n"} 5. Automatic Waterers{"\n"} 6. Automatic Concentrate dispenser
          system
          {"\n"} 7. Control unit containing temperature sensor{"\n"} 8. Water
          tank (outside the shed) for recirculation of water{"\n"} 9. Drinking
          water tank 10. Feed bin{" "}
        </Text>
        <FlatList
          data={environmentalList}
          numColumns={width > 400 ? 2 : 1}
          renderItem={({ item }) => (
            <View style={{ alignItems: "center" }}>
              <View style={styles.imageHeader}>
                <Text style={styles.imageName}>{item.description}</Text>
              </View>
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
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  rootScreen: { flex: 1 },
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // paddingHorizontal: 200,
    backgroundColor: "white",
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
    shadowColor: "black",
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

// import {
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   StyleSheet,
//   Alert,
// } from "react-native";
// import React, { useRef, useState } from "react";
// import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";

// import { firebaseConfig } from "../config";
// import firebase from "firebase/compat/app";

// export const Otp = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [code, setCode] = useState();
//   const [verificationId, setVerificationId] = useState(null);
//   const recaptchaVerifier = useRef(null);
//   const sendVerification = () => {
//     const phoneProvider = new firebase.auth.PhoneAuthProvider();
//     phoneProvider
//       .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
//       .then(setVerificationId);
//     setPhoneNumber("");
//   };
//   const confirmCode = () => {
//     const credential = firebase.auth.PhoneAuthProvider.credential(
//       verificationId,
//       code
//     );
//     firebase
//       .auth()
//       .signInWithCredential(credential)
//       .then(() => {
//         setCode("");
//       })
//       .catch((error) => {
//         // show an alert in case of error
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <FirebaseRecaptchaVerifierModal
//         firebaseConfig={firebaseConfig}
//         ref={recaptchaVerifier}
//       />
//       <Text style={styles.otpText}>I Login using OTP</Text>
//       <TextInput
//         placeholder="Phone Number With Country code"
//         onChangeText={setPhoneNumber}
//         keyboardType="phone-pad"
//         autoCompleteType="tel"
//       />
//       <TouchableOpacity
//         style={styles.sendVerification}
//         onPress={sendVerification}
//       >
//         <Text style={styles.buttonText}>Send verification</Text>
//       </TouchableOpacity>

//       <TextInput
//         placeholder="Phone Number With Country code"
//         onChangeText={setPhoneNumber}
//         keyboardType="phone-pad"
//         autoCompleteType="tel"
//         style={styles.textInput}
//       />
//       <TextInput
//         placeholder="Confirm Code"
//         onChangeText={setCode}
//         keyboardType="number-pad"
//         style={styles.textInput}
//       />
//       <TouchableOpacity style={styles.sendCode} onPress={confirmCode}>
//         <Text style={styles.buttonText}>Confirm verification</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#000",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   textInput: {
//     paddingTop: 40,
//     paddingBottom: 20,
//     paddingHorizontal: 20,
//     fontSize: 24,
//     borderBottomColor: "#fff",
//     // borderBottomwidth: 2,
//     marginBottom: 20,
//     textAlign: "center",
//     color: "#fff",
//   },
//   sendVerification: {
//     padding: 20,
//     backgroundColor: "#3498db",
//     borderRadius: 10,
//   },
//   sendCode: {
//     padding: 20,
//     backgroundColor: "#9b59b6",
//     borderRadius: 10,
//   },
//   buttonText: {
//     textAlign: "center",
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   otpText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#fff",
//     margin: 20,
//   },
// });
