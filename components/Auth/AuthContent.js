import { useContext, useState } from "react";
import { Alert, StyleSheet, View, Text, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import FlatButton from "../uiCred/FlatButton";
import AuthForm from "./AuthForm";
import { Colors } from "../../constants/styles";
import { ScrollView } from "react-native";
import { AuthContext } from "../../store/auth-context";

function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();
  const authCtx = useContext(AuthContext);

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
    phone: false,
    name: false,
  });

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace("Signup");
    } else {
      navigation.replace("Login");
    }
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

  function submitHandler(credentials) {
    let {
      email,
      confirmEmail,
      password,
      confirmPassword,
      name,
      phone,
    } = credentials;

    email = email.trim();
    password = password.trim();

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    const emailIsValid = reg.test(email);
    const passwordIsValid = password.length > 5;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;
    const isNumValid = phoneValidation(phone);
    const isNameValid = nameValidation(name);

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailIsValid || !passwordIsValid))
    ) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      setCredentialsInvalid({
        email: !emailIsValid,
        // confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        // confirmPassword: !passwordIsValid || !passwordsAreEqual,
        phone: !isNumValid,
        name: !isNameValid,
      });
      return;
    }

    authCtx.phoneNumberSetter(phone);
    authCtx.LoginNameSetter(name);
    onAuthenticate({ email, password });
  }

  return (
    <ImageBackground
      source={require("../../assets/images/background2.webp")}
      style={styles.rootScreen}
      resizeMode="cover"
      imageStyle={styles.backgroundImage}
    >
      <ScrollView style={!isLogin ? styles.screen : styles.loginscreen}>
        <View style={styles.authContent}>
          <AuthForm
            isLogin={isLogin}
            onSubmit={submitHandler}
            credentialsInvalid={credentialsInvalid}
          />
          <View style={styles.buttons}>
            <FlatButton onPress={switchAuthModeHandler}>
              {isLogin ? "Create a new user" : "Already a user"}
            </FlatButton>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    // marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "rgba(114, 146, 169, 0.7)",
    // elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  buttons: {
    marginTop: 8,
  },
  backgroundImage: {
    opacity: 0.4,
  },
  rootScreen: {
    flex: 1,
  },
  screen: {
    marginTop: 100,
  },
  loginscreen: {
    marginTop: 150,
  },
});
