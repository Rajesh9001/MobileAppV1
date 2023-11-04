import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Communications from "react-native-communications";

function FarmerHelpDesk({ navigation }) {
  return (
    <View style={styles.rootScreen}>
      <Text>
        The idea is to help the farmer to browse the different materials (fodder
        seeds, mineral bricks , milking machines etc) as a ready reckoner.
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonStyle}
        onPress={() =>
          Communications.web(
            "https://www.nddb.coop/farmer/animal-nutrition/state-wise-list-of-seeds-producer-supplier"
          )
        }
      >
        <View>
          <Text style={{ color: "blue", paddingTop: 20 }}>
            Fodder Seed Supplier {"  <"}-- click here
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonStyle}
        onPress={() => Communications.web("https://pondchy.in/")}
      >
        <View>
          <Text style={{ color: "blue", paddingTop: 20 }}>
            Mineral blocks {"  <"}-- click here
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonStyle}
        onPress={() => Communications.web("https://www.nddb.coop/")}
      >
        <View>
          <Text style={{ color: "blue", paddingTop: 20 }}>
            NATIONAL DAIRY DEVELOPMENT BOARD {"  <"}-- click
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default FarmerHelpDesk;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    padding: 20,
    fontSize: 16,
  },
});
