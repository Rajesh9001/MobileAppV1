import { Text } from "react-native";

function Feedback({ navigation }) {
  return <Text onPress={() => navigation.navigate("Feedback")}>Feedback</Text>;
}

export default Feedback;
