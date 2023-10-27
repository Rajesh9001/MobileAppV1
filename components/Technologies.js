import { View, Text, StyleSheet, ScrollView } from "react-native";
import Press from "../ui/Press";
import { FadeInFlatList } from "@ja-ka/react-native-fade-in-flatlist";

const List = [
  {
    id: "1",
    name: "Azolla",
    page: "Azolla",
  },
  {
    id: "2",
    name: "Hydrophonics",
    page: "Hydrophonics",
  },
];

export default function Technologies() {
  return (
    <FadeInFlatList
      initialDelay={100}
      durationPerItem={500}
      parallelItems={5}
      itemsToFadeIn={10}
      data={List}
      renderItem={({ item }) => (
        <Press page={item.page}>
          <Text style={styles.eachButton}>{item.name}</Text>
        </Press>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
  eachButton: {
    backgroundColor: "#58b870",
    padding: 15,
    margin: 15,
    borderRadius: 10,
    overflow: "hidden",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "700",
    color: "#022920",
  },
});
