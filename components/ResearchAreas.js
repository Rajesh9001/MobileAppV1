import { Text } from "react-native";

function ResearchAreas({ navigation }) {
  return (
    <Text onPress={() => navigation.navigate("ResearchAreas")}>
      ResearchAreas
    </Text>
  );
}

export default ResearchAreas;
