import { createDrawerNavigator } from "@react-navigation/drawer";
import user from "./User";
import welcome from "./Welcome";
import RecentWorks from "./RecentWorks";
import Home from "./Home";
import { NavigationContainer } from "@react-navigation/native";
import First from "./First";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Feed" component={First} />
        <Drawer.Screen name="Article" component={welcome} />
        {/* <Drawer.Screen name="home" component={Home} /> */}
        <Drawer.Screen name="RecentWorks" component={RecentWorks} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer;
