import { Text } from "react-native";

function FarmerHelpDesk({ navigation }) {
  return (
    <Text onPress={() => navigation.navigate("FarmerHelpDesk")}>
      FarmerHelpDesk
    </Text>
  );
}

export default FarmerHelpDesk;
