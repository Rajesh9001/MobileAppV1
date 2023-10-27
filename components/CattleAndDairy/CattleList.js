import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FlatList } from "react-native";
import Press from "../../ui/Press";
import { FadeInFlatList } from "@ja-ka/react-native-fade-in-flatlist";

const List = [
  {
    id: "1",
    name: "Dairy Project (Cost)",
    page: "Dairy",
  },
  {
    id: "2",
    name: "Environmental Dairy Housing",
    page: "EnvironmentalDairyHousing",
  },
  {
    id: "3",
    name: "Housing",
    page: "Housing",
  },
  {
    id: "4",
    name: "Organic Dairy",
    page: "OrganicDairy",
  },
  {
    id: "5",
    name: "Selection of Good Animals",
    page: "SelectionOfGoodAnimals",
  },
  {
    id: "6",
    name: "Wallowing Tank",
    page: "WallowingTank",
  },
  {
    id: "7",
    name: "Calf Rearing",
    page: "CalfRearing",
  },
  {
    id: "8",
    name: "Clean Milk Production",
    page: "CleanMilkProduction",
  },
  {
    id: "9",
    name: "Feeding",
    page: "Feeding",
  },
  {
    id: "10",
    name: "Heat Detection",
    page: "HeatDetection",
  },

  {
    id: "11",
    name: "Diseases",
    page: "Diseases",
  },
  {
    id: "12",
    name: "Preventive Health Care",
    page: "PreventiveHealthCare",
  },
];

export default function CattleList() {
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
