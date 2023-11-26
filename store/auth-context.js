import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
  Gmail: "",
  mailsetter: (Gmail) => {},
  otpLoginName: "",
  LoginNameSetter: (otpLoginName) => {},
  phoneNumber: "",
  phoneNumberSetter: (phoneNumber) => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [mail, setMail] = useState();
  const [loginName, setLoginName] = useState();
  const [phone, setPhone] = useState();

  function authenticate(token) {
    setAuthToken(token);
    AsyncStorage.setItem("token", token);
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem("token");
  }

  function mailsetter(Gmail) {
    setMail(Gmail);
  }

  function LoginNameSetter(otpLoginName) {
    setLoginName(otpLoginName);
  }

  function phoneNumberSetter(phoneNumber) {
    setPhone(phoneNumber);
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
    Gmail: mail,
    mailsetter: mailsetter,
    otpLoginName: loginName,
    LoginNameSetter: LoginNameSetter,
    phoneNumber: phone,
    phoneNumberSetter: phoneNumberSetter,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
