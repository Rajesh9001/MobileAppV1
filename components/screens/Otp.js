import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
  Button,
  ImageBackground,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../../config";
import firebase from "firebase/compat/app";
import LoadingOverlay from "../../ui/LoadingOverlay";
import { useContext } from "react";
import { Context } from "../../store/Context";
import { AuthContext } from "../../store/auth-context";
import { createUserByPhone } from "../../util/auth";

export default function Otp({ navigation }) {
  // const { name, phoneNumber, setName, setPhoneNumber } = useContext(Context);
  const context = useContext(Context);
  const authCtx = useContext(AuthContext);
    const [phoneNumber, setPhoneNumber] = useState();
    const [name, setName] = useState();
    const [mail, setMail]= useState();
  const [code, setCode] = useState();
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [err, setErr] = useState(false);
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();
  const [emailValidError, setEmailValidError] = useState('');


  const sendVerification = async () => {
    // console.log(isNameValid);
    // console.log(context.phoneNumber);
   authCtx.LoginNameSetter(name);
   authCtx.phoneNumberSetter(phoneNumber);
   authCtx.mailsetter(mail);
    const phoneProvider = new firebase.auth.PhoneAuthProvider();

    try {
      const isNumValid = phoneValidation(phoneNumber);
      const isNameValid = nameValidation(name);

      if (!isNameValid) {
        Alert.alert("Please enter valid Name");
        return;
      }
      if (!isNumValid) {
        Alert.alert("Please enter valid number");
        return;
      }
      // const data = createUserByPhone(phoneNumber);
      // console.log(data);
      // authCtx.authenticate(data.idToken);

      setIsSubmitting(true);
      setIsSubmitting(false);
      phoneProvider
        .verifyPhoneNumber(
          `+91${phoneNumber}`,
          recaptchaVerifier.current
        )
        .then(setVerificationId);
    
    } catch (error) {
      setIsSubmitting(false);
      Alert.alert("Error Encountered");
    }
  };

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay message={"Logging In"} />;
  }

  const phoneValidation = (Number) => {
    if (Number.length != 10) return false;
    else if (isNaN(Number)) return false;
    else return true;
  };

  const nameValidation = (Name) => {
    if (!isNaN(Name)) return false;
    else return true;
  };

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );

    setIsSubmitting(true);
    firebase
      .auth()
      .signInWithCredential(credential)
      .then(() => {
        setCode("");
        // console.log("after setcode " + context.name);
        // context.setCity(context.name);
        // console.log("after setting city" + context.city);
        setIsSubmitting(false);
        navigation.replace("Drawer");

        Alert.alert(" Login Success");
      })
      .catch((error) => {
        Alert.alert("Please Enter correct code");
        setErr(true);
        setIsSubmitting(false);
      });
  };

  const updateName = (valueEntered) => {
    context.setCity(valueEntered);
    context.setName(valueEntered);
  };
  const updatePhoneNumber = (valueEntered) => {
    setPhoneNumber(valueEntered);
  };


  const handleValidEmail = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    
    if (val.length === 0) {
      setEmailValidError('email address must be enter');
    } else if (reg.test(val) === false) {
      setEmailValidError('enter valid email address');
    } else if (reg.test(val) === true) {
      setEmailValidError('');
    }
    };
    




  return (
    <ImageBackground
      source={require("../../assets/images/background2.webp")}
      style={styles.rootScreen}
      resizeMode="cover"
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.widget}>
          <FirebaseRecaptchaVerifierModal
            firebaseConfig={firebaseConfig}
            ref={recaptchaVerifier}
          />
          <Text style={styles.otpText}>Login</Text>
          <TextInput
            placeholder="Name"
            // onChangeText={updateName}
            value={name}
            onChangeText={(name) => {
              setName(name);
            }}
            color="black"
            backgroundColor="white"
            style={styles.textInput}
          />

          <TextInput
            placeholder="Enter Phone number"
            // onChangeText={updatePhoneNumber}
            value={phoneNumber}
            onChangeText={(phoneNumber) => {
              setPhoneNumber(phoneNumber);
            }}
            keyboardType="phone-pad"
            autoCompleteType="tel"
            color="black"
            backgroundColor="white"
            style={styles.textInput}
          />
            <TextInput
    style={styles.input}
    placeholder="Email"
    value={mail}
    autoCorrect={false}
    autoCapitalize="none"
    onChangeText={value => {
      setMail(value);
      handleValidEmail(value);
    }}
  />
          <TouchableOpacity
            style={styles.sendVerification}
            onPress={sendVerification}
          >
            <Text style={styles.buttonText}>Send verification</Text>
          </TouchableOpacity>
          <TextInput
            placeholder="Confirm Code"
            onChangeText={setCode}
            keyboardType="number-pad"
            style={styles.textInput}
            color="black"
            backgroundColor="white"
          />
          <TouchableOpacity style={styles.sendCode} onPress={confirmCode}>
            <Text style={styles.buttonText}>Confirm verification</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#4b6750",
    alignItems: "center",
    justifyContent: "center",
  },
  widget: {
    backgroundColor: "rgba(114, 146, 169, 0.8)",
    padding: 30,
    borderRadius: 15,
  },
  backgroundImage: {
    opacity: 0.4,
  },
  rootScreen: {
    flex: 1,
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
  sendCode: {
    padding: 10,
    backgroundColor: "#14bb0b",
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    width: 200,
  },
  otpText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
});
