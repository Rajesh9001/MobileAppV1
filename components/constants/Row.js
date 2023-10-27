import { View, ViewStyle } from "react-native";
import { styles } from "../common/Styles";
import { ReactNode } from "react";

export default function Row({ children, backgroundColor, style }) {
  return (
    <View style={[styles.row, { backgroundColor }, style]}>{children}</View>
  );
}
