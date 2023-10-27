import { Text } from "react-native";

import CattleList from "../CattleAndDairy/CattleList";

function Cattle({ navigation }) {
  return <Text onPress={() => navigation.navigate("CattleList")}>Cattle</Text>;
}

export default Cattle;
