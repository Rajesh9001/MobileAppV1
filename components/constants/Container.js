import { View, ViewStyle } from "react-native";
import { styles } from "../common/Styles";

function Container({ children, backgroundColor, style }) {
  return (
    <View style={[styles.container, { backgroundColor }, style]}>
      {children}
    </View>
  );
}

export default Container;
