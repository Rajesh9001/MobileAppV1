import React, { Children, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";

function OpactiyAnimation({ children }) {
  const opacityAnimation = useRef(new Animated.Value(1)).current;

  const opacityStyle = { opacity: opacityAnimation };

  const animateElement = () => {
    Animated.timing(opacityAnimation, {
      toValue: 0.7,
      duration: 350,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(opacityAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => animateElement()}>
      <Animated.View style={[opacityStyle]}>{children}</Animated.View>
    </TouchableWithoutFeedback>
  );
}
export default OpactiyAnimation;
