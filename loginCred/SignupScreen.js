import { useState, useContext } from "react";
import { Alert } from "react-native";

import AuthContent from "../components/Auth/AuthContent.js";
import LoadingOverlay from "../ui/LoadingOverlay";
import { createUser } from "../util/auth";
import { AuthContext } from "../store/auth-context.js";
import { storeUser } from "../util/http.js";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);
  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const data = await createUser(email, password);

      const users = {
        name: "Raj1",
        phone: "9182141058",
        email: "Hi@gmail.com",
      };

      console.log(data);
      authCtx.authenticate(data.idToken);
      // storeUser();
      console.log("console mail in signup=" + data.email);

      authCtx.mailsetter(data.email);
      console.log("auth email  in signup=" + authCtx.Gmail);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not create user or Try again,\n'Login' if already a user"
      );
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
