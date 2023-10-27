import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";

function LoadingOverlay({ message }) {
  return (
    <ImageBackground
      source={require("../assets/images/background2.webp")}
      style={styles.rootScreen}
      resizeMode="cover"
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.rootContainer}>
        <Text style={styles.message}>{message}</Text>
        <ActivityIndicator size="large" color="blue" />
      </View>
    </ImageBackground>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    // backgroundColor: "powderblue",
  },
  rootScreen: {
    flex: 1,
  },
  message: {
    fontSize: 16,
    marginBottom: 12,
  },
  backgroundImage: {
    opacity: 0.5,
  },
});
