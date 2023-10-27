import React, { useRef } from "react";
import { View, TouchableWithoutFeedback, Animated } from "react-native";
import { Pressable, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";

function Press({ children, page }) {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={() => navigation.navigate(page)}
      >
        {children}
      </Pressable>
    </View>
  );
}

export default Press;

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.5,
  },
});
