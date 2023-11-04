import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  AntDesign,
  Entypo,
  FontAwesome5,
  Foundation,
  Ionicons,
  Octicons,
} from "@expo/vector-icons";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import AboutUs from "../AboutUs";
import Animals from "../Animals";
import RecentWorks from "./RecentWorks";
import Publication from "../Publication";
import ResearchAreas from "../ResearchAreas";
import Teaching from "../Teaching.js";
import Download from "./Download";
import Extention from "./Extention";
import Byproducts from "./Byproducts";
import Technologies from "../Technologies.js";
import IndianHeritage from "./IndianHeritage";
import FarmerHelpDesk from "../FarmerHelpDesk";
import Contact from "../Contact";
import FeedBack from "../FeedBack";
import Home from "./Welcome";
import User from "../User";
import { ContextProvider } from "../../store/Context";

const Drawer = createDrawerNavigator();
const ScreensArray = [
  {
    route: "Home",
    label: "Home",
    icon: "home",
    component: Home,
  },
  {
    route: "AboutUs",
    label: "AboutUs",
    icon: "user",
    component: AboutUs,
  },
];
function MyDrawer() {
  return (
    <ContextProvider>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#387849" },
          headerTintColor: "white",
          sceneContainerStyle: { backgroundColor: "#ccc4bf" },
          drawerContentStyle: { backgroundColor: "#185828e7" },
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: "#351401",
          drawerActiveBackgroundColor: "#a9e4a1",
        }}
        // drawerContent={() => <Home />}
      >
        {/* {ScreensArray.map((item, index) => {
        return (
          <Drawer.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              item,
              drawerIcon: ({ color, size, focused }) => (
                <Icon name={item.icon} size={size} color={color} />
              ),
            }}
          />
        );
      })} */}
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            title: "Welcome",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={18}></Ionicons>
            ),
          }}
        />
        {/* <Drawer.Screen
        name="Article"
        component={Article}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="article" size={20} color={color} />
          ),
        }}
      /> */}
        <Drawer.Screen
          name="AboutUs"
          component={AboutUs}
          options={{
            title: "Profile",
            headerStyle: { backgroundColor: "#155c28" },
            sceneContainerStyle: { backgroundColor: "#ebdede" },
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={18}></Ionicons>
            ),
          }}
        />
        <Drawer.Screen
          name="Animals"
          component={Animals}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cow" size={21} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Recent Works"
          component={RecentWorks}
          options={{
            drawerIcon: ({ color, size }) => (
              <Entypo name="back-in-time" size={20} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="Research Areas"
          component={ResearchAreas}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="book-search"
                size={20}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="By products of Cow"
          component={Byproducts}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cow" size={21} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Technologies"
          component={Technologies}
          options={{
            drawerIcon: ({ color, size }) => (
              <Octicons name="workflow" size={20} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Teaching"
          component={Teaching}
          options={{
            drawerIcon: ({ color, size }) => (
              <FontAwesome5 name="chalkboard-teacher" size={18} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Extention"
          component={Extention}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="sale" size={22} color={color} />
            ),
            headerStyle: { backgroundColor: "#f7f4f4" },
            headerTintColor: "black",
          }}
        />

        {/* <Drawer.Screen
        name="PDFExample"
        component={PDFExample}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="chalkboard-teacher" size={18} color={color} />
          ),
        }}
      /> */}
        {/*
   
     
     
     

*/}
        <Drawer.Screen
          name=" Indian Heritage"
          component={IndianHeritage}
          options={{
            headerStyle: { backgroundColor: "#5ba555ff" },
            headerTintColor: "#f3f2f2",
            drawerIcon: ({ color, size }) => (
              <Foundation name="sheriff-badge" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Farmer HelpDesk"
          component={FarmerHelpDesk}
          options={{
            drawerIcon: ({ color, size }) => (
              <FontAwesome5 name="hands-helping" size={18} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Publication"
          component={Publication}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="book-sharp" size={20} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name=" FeedBack"
          component={FeedBack}
          options={{
            drawerIcon: ({ color, size }) => (
              <Entypo name="new-message" size={22} color={color} />
            ),
            headerStyle: { backgroundColor: "#fff" },
            headerTintColor: "black",
            title: "Feedback",
            sceneContainerStyle: { backgroundColor: "#f1f4f2" },
          }}
        />
        <Drawer.Screen
          name="Contact"
          component={Contact}
          options={{
            drawerIcon: ({ color, size }) => (
              <Entypo name="phone" size={22} color={color} />
            ),
            headerStyle: { backgroundColor: "#fff" },
            headerTintColor: "black",
            title: "Contact Us",
            drawerActiveTintColor: "#351401",
          }}
        />
        {/* <Drawer.Screen
          name="Download"
          component={Download}
          options={{
            drawerIcon: ({ color, size }) => (
              <Entypo name="phone" size={22} color={color} />
            ),
            headerStyle: { backgroundColor: "#fff" },
            headerTintColor: "black",
            title: "Contact Us",
            drawerActiveTintColor: "#351401",
          }}
        /> */}
      </Drawer.Navigator>
    </ContextProvider>
  );
}

export default MyDrawer;
