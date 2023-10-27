import { Text } from "react-native";

function Publication({ navigation }) {
  return (
    <Text onPress={() => navigation.navigate("Publication")}>Publication</Text>
  );
}

export default Publication;
