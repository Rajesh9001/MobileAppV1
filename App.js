import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import Otp from "./components/screens/Otp";
import MyDrawer from "./components/screens/MyDrawer";
import Azolla from "./components/screens/Azolla.js";
import Hydrophonics from "./components/screens/Hydrophonics";
import First from "./components/screens/First";
import Sheep from "./components/sheep/Sheep";
import SheepBreeding from "./components/sheep/SheepBreeding";
import ScientificPractices from "./components/sheep/ScientificPractices";
import HealthCare from "./components/sheep/HealthCare";
import FoddersSheep from "./components/sheep/FoddersSheep";
import GoatHousing from "./components/sheep/GoatHousing";
import BestPractices from "./components/sheep/BestPractices";
import SheepDiesases from "./components/sheep/SheepDiesases";
import Emu from "./components/screens/Emu";
import BioGas from "./components/CattleAndDairy/BioGas";
import GoMutraArk from "./components/CattleAndDairy/GoMutraArk";
import VermiComposting from "./components/CattleAndDairy/VermiComposting";
import Cattle from "./components/screens/Cattle";
import CattleList from "./components/CattleAndDairy/CattleList";
import Dairy from "./components/CattleAndDairy/Dairy";
import EnvironmentalDairyHousing from "./components/CattleAndDairy/EnvironmentalDairyHousing";
import HeatDetection from "./components/CattleAndDairy/HeatDetection";
import Housing from "./components/CattleAndDairy/Housing";
import Feeding from "./components/CattleAndDairy/Feeding";
import CalfRearing from "./components/CattleAndDairy/CalfRearing";
import CleanMilkProduction from "./components/CattleAndDairy/CleanMilkProduction";
import Diseases from "./components/CattleAndDairy/Diseases";
import OrganicDairy from "./components/CattleAndDairy/OrganicDairy";
import PreventiveHealthCare from "./components/CattleAndDairy/PreventiveHealthCare";
import SelectionOfGoodAnimals from "./components/CattleAndDairy/SelectionOfGoodAnimals";
import WallowingTank from "./components/CattleAndDairy/WallowingTank";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
import { ContextProvider } from "./store/Context";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#387849" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#ccc4bf" },
            }}
          >
            <Stack.Screen
              name="First"
              component={First}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="Otp"
              component={Otp}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="Drawer"
              component={MyDrawer}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Emu" component={Emu} />
            <Stack.Screen name="Cattle" component={Cattle} />
            <Stack.Screen name="Sheep" component={Sheep} />
            <Stack.Screen
              name="SheepBreeding"
              component={SheepBreeding}
              options={{
                title: "",
              }}
            />
            <Stack.Screen
              name="ScientificPractices"
              component={ScientificPractices}
            />
            <Stack.Screen
              name="HealthCare"
              component={HealthCare}
              options={{
                title: "",
              }}
            />
            <Stack.Screen
              name="BestPractices"
              component={BestPractices}
              options={{
                title: "",
              }}
            />
            <Stack.Screen
              name="FoddersSheep"
              component={FoddersSheep}
              options={{
                title: "",
              }}
            />
            <Stack.Screen
              name="GoatHousing"
              component={GoatHousing}
              options={{
                title: "",
              }}
            />
            <Stack.Screen
              name="SheepDiesases"
              component={SheepDiesases}
              options={{
                title: "",
              }}
            />
            <Stack.Screen
              name="BioGas"
              component={BioGas}
              options={{
                title: "",
              }}
            />
            <Stack.Screen
              name="GoMutraArk"
              component={GoMutraArk}
              options={{
                title: "",
              }}
            />
            <Stack.Screen
              name="VermiComposting"
              component={VermiComposting}
              options={{
                title: "",
              }}
            />

            <Stack.Screen
              name="Azolla"
              component={Azolla}
              options={{
                title: "",
              }}
            />

            <Stack.Screen
              name="Hydrophonics"
              component={Hydrophonics}
              options={{
                title: "",
              }}
            />
            <Stack.Screen
              name="CattleList"
              component={CattleList}
              options={{
                title: "Cattle List",
              }}
            />

            <Stack.Screen
              name="Dairy"
              component={Dairy}
              options={{
                title: "",
              }}
            />
            <Stack.Screen
              name="EnvironmentalDairyHousing"
              component={EnvironmentalDairyHousing}
              options={{
                title: "",
                headerRight: () => (
                  <Button
                    onPress={() => alert("This is info!")}
                    title="Info"
                    color="#053101"
                  />
                ),
              }}
            />
            <Stack.Screen
              name="CalfRearing"
              component={CalfRearing}
              options={{
                title: "",
              }}
            />
            <Stack.Screen
              name="CleanMilkProduction"
              component={CleanMilkProduction}
              options={{
                title: "",
              }}
            />
            <Stack.Screen
              name="Diseases"
              component={Diseases}
              options={{
                title: "",
              }}
            />
            <Stack.Screen
              name="Feeding"
              component={Feeding}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="HeatDetection"
              component={HeatDetection}
              options={{
                title: "",
              }}
            />
            <Stack.Screen
              name="Housing"
              component={Housing}
              options={{
                title: "",
              }}
            />
            <Stack.Screen
              name="OrganicDairy"
              component={OrganicDairy}
              options={{
                title: "",
              }}
            />
            <Stack.Screen
              name="PreventiveHealthCare"
              component={PreventiveHealthCare}
              options={{
                title: "",
              }}
            />
            <Stack.Screen
              name="SelectionOfGoodAnimals"
              component={SelectionOfGoodAnimals}
              options={{
                title: "",
              }}
            />
            <Stack.Screen
              name="WallowingTank"
              component={WallowingTank}
              options={{
                title: "",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
