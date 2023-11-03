import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  Image,
  Button,
} from "react-native";
import { ImageSlider } from "react-native-image-slider-banner";
import Press from "../../ui/Press";
import { Context } from "../../store/Context";
import { useContext } from "react";

// import { SliderBox } from "react-native-image-slider-box";
import {
  PlayfairDisplay_400Regular,
  PlayfairDisplay_400Regular_Italic,
  PlayfairDisplay_500Medium,
  PlayfairDisplay_500Medium_Italic,
  PlayfairDisplay_600SemiBold,
  PlayfairDisplay_600SemiBold_Italic,
  PlayfairDisplay_700Bold,
  PlayfairDisplay_700Bold_Italic,
  PlayfairDisplay_800ExtraBold,
  PlayfairDisplay_800ExtraBold_Italic,
  PlayfairDisplay_900Black,
  PlayfairDisplay_900Black_Italic,
  useFonts,
} from "@expo-google-fonts/playfair-display";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Dimensions } from "react-native";

const images = [
  require("../../assets/images/cowAndCalf.png"),
  require("../../assets/images/cattle.png"),
  require("../../assets/images/Emu3.png"),
  require("../../assets/images/sheep1.png"),
  require("../../assets/images/calf1.png"),
  // "https://source.unsplash.com/1024x768/?nature",
  // "https://source.unsplash.com/1024x768/?water",
  // "https://source.unsplash.com/1024x768/?tree",
];

// const quotes1 = [
//   require("../../assets/images/quote1.jpeg"),
//   require("../../assets/images/quote2.jpeg"),
//   require("../../assets/images/quote3.jpeg"),
//   require("../../assets/images/quote4.jpeg"),
//   require("../../assets/images/quote5.jpeg"),
//   require("../../assets/images/quote6.jpeg"),
//   require("../../assets/images/quote7.jpeg"),
//   require("../../assets/images/quote8.jpeg"),
//   require("../../assets/images/quote9.jpeg"),
//   require("../../assets/images/quote10.jpeg"),
//   require("../../assets/images/quote11.jpeg"),
//   require("../../assets/images/quote12.jpeg"),
//   require("../../assets/images/quote13.jpeg"),
//   require("../../assets/images/quote14.jpeg"),
//   require("../../assets/images/quote15.jpeg"),
//   require("../../assets/images/quote16.jpeg"),
//   require("../../assets/images/quote17.jpeg"),
// ];

const data = [
  {
    img: require("../../assets/images/cowAndCalf.png"),
  },
  {
    img: require("../../assets/images/cattle.png"),
  },
  {
    img: require("../../assets/images/Emu3.png"),
  },
  {
    img: require("../../assets/images/sheep1.png"),
  },
  {
    img: require("../../assets/images/calf1.png"),
  },
];

const quotes = [
  {
    img: require("../../assets/images/quote1.jpeg"),
  },
  {
    img: require("../../assets/images/quote2.jpeg"),
  },
  {
    img: require("../../assets/images/quote3.jpeg"),
  },
  {
    img: require("../../assets/images/quote4.jpeg"),
  },
  {
    img: require("../../assets/images/quote5.jpeg"),
  },
  {
    img: require("../../assets/images/quote6.jpeg"),
  },
  {
    img: require("../../assets/images/quote7.jpeg"),
  },
  {
    img: require("../../assets/images/quote8.jpeg"),
  },
  {
    img: require("../../assets/images/quote9.jpeg"),
  },
  {
    img: require("../../assets/images/quote10.jpeg"),
  },
  {
    img: require("../../assets/images/quote11.jpeg"),
  },
  {
    img: require("../../assets/images/quote12.jpeg"),
  },
  {
    img: require("../../assets/images/quote13.jpeg"),
  },
  {
    img: require("../../assets/images/quote14.jpeg"),
  },
  {
    img: require("../../assets/images/quote15.jpeg"),
  },
  {
    img: require("../../assets/images/quote16.jpeg"),
  },
  {
    img: require("../../assets/images/quote17.jpeg"),
  },
];

const { width, height } = Dimensions.get("window");
export default function Welcome() {
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_500Medium,
    PlayfairDisplay_600SemiBold,
    PlayfairDisplay_700Bold,
    PlayfairDisplay_800ExtraBold,
    PlayfairDisplay_900Black,
    PlayfairDisplay_400Regular_Italic,
    PlayfairDisplay_500Medium_Italic,
    PlayfairDisplay_600SemiBold_Italic,
    PlayfairDisplay_700Bold_Italic,
    PlayfairDisplay_800ExtraBold_Italic,
    PlayfairDisplay_900Black_Italic,
  });
  // const { name, phoneNumber, setName } = useContext(Context);
  const context = useContext(Context);

  // const { name, phoneNumber, city } = context;

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  function click() {
    console.log("name in welcome page" + context.name);
    console.log("city " + context.city);
    console.log("phone " + context.phoneNumber);
  }
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={[styles.highlight]}> VETERINARY </Text>
        {/* <Text style={{ color: "black" }}>name is {context.name}</Text>
        <Button title="yes" onPress={click}>
          yes
        </Button> */}
        {/* <Text>{context.phoneNumber}</Text> */}
      </View>
      <View>
        <View>
          <Text style={styles.intro}>
            {"    "}
            It is the branch of medicine that deals with the prevention,
            management, diagnosis, and treatment of disease, disorder, and
            injury in animals. Along with this, it deals with animal rearing,
            husbandry, breeding, research on nutrition, and product development.
          </Text>
        </View>
      </View>
      <ImageSlider
        localImg={true}
        data={data}
        autoPlay
        closeIconColor="#fff"
        previewImageContainerStyle={{ padding: 20 }}
        // previewImageStyle={{
        //   width: 90,
        // }}
        caroselImageContainerStyle={{ padding: 20 }}
        caroselImageStyle={{
          resizeMode: "cover",
          height: 220,
          borderRadius: 15,
          width: Platform.OS === "android" ? 310 : 350,
        }}
        activeIndicatorStyle={{ height: 6, width: 20, backgroundColor: "grey" }}
        inActiveIndicatorStyle={{ height: 9, width: 9 }}
        indicatorContainerStyle={{ marginBottom: -15 }}
      />

      {/* <SliderBox
        images={images}
        autoplayInterval={3000}
        sliderBoxHeight={height < 1100 ? 220 : 440}
        onCurrentImagePressed={(index) =>
          console.warn(`image ${index} pressed`)
        }
        resizeMethod={"resize"}
        resizeMode={"cover"}
        paginationBoxVerticalPadding={20}
        ImageComponentStyle={{ borderRadius: 15, width: "90%", marginTop: 5 }}
        imageLoadingColor="#2196F3"
        paginationBoxStyle={{
          position: "absolute",
          bottom: 0,
          padding: 0,
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
          paddingVertical: 10,
        }}
        dotStyle={{
          width: 5,
          height: 5,
          borderRadius: 5,
          marginHorizontal: 0,
          padding: 0,
          margin: 0,
          backgroundColor: "rgba(128, 128, 128, 0.92)",
        }}
        autoplay
        circleLoop
        dotColor="#fd7d06eb"
      /> */}
      <View
        style={[
          styles.highlightBack,
          { marginHorizontal: "5%", marginVertical: "-1%" },
        ]}
      >
        <Text style={[styles.testimonal, { color: "#b00505", fontSize: 16 }]}>
          {" "}
          Testimonials{" "}
        </Text>
        <View>
          <Text style={[styles.intro]}>
            Every animal has his or her story, his or her thoughts, daydreams,
            and interests. All feel joy and love, pain and fear, as we now know
            beyond any shadow of a doubt. All deserve that the human animal
            afford them the respect of being cared for with great consideration
            for those interests or left in peace. {"\n\n"}Ingrid Newkirk―
            British Activist
          </Text>
        </View>
      </View>
      <View>
        {/* <View
          style={[
            styles.highlightBack,
            {
              padding: 0,
              marginHorizontal: "5%",
              backgroundColor: "#0ac98990",
            },
          ]}
        >
          <Text style={[styles.highlight, { fontSize: 16, color: "black" }]}>
            Some
            <Text style={{ color: "#b00505", fontSize: 16 }}> famous </Text>
            Quotations
          </Text>
        </View> */}
        {/* <SliderBox
          images={quotes}
          autoplayInterval={5000}
          sliderBoxHeight={height < 1100 ? 60 : 115}
          onCurrentImagePressed={(index) =>
            console.warn(`image ${index} pressed`)
          }
          resizeMethod={"resize"}
          resizeMode={"cover"}
          paginationBoxVerticalPadding={20}
          ImageComponentStyle={{ borderRadius: 15, width: "90%", marginTop: 5 }}
          imageLoadingColor="#2196F3"
          paginationBoxStyle={{
            position: "absolute",
            bottom: 0,
            padding: 0,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            paddingVertical: 10,
          }}
          dotStyle={{
            width: 0,
            height: 0,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: "rgba(128, 128, 128, 0.92)",
          }}
          autoplay
          circleLoop
          dotColor="#fd7d06eb"
        /> */}
        <ImageSlider
          localImg={true}
          data={quotes}
          autoPlay
          closeIconColor="#fff"
          previewImageContainerStyle={{ padding: 20 }}
          timer={4000}
          caroselImageContainerStyle={{ padding: 20 }}
          caroselImageStyle={{
            resizeMode: "cover",
            height: height < 1100 ? 60 : 115,
            borderRadius: 15,
            width: Platform.OS === "android" ? 320 : 350,
          }}
          activeIndicatorStyle={{
            height: 0,
            width: 0,
            backgroundColor: "grey",
          }}
          inActiveIndicatorStyle={{ height: 0, width: 0 }}
          indicatorContainerStyle={{ marginBottom: "5%" }}
        />
      </View>

      <View style={styles.press}>
        <Press page="Animals">
          <View style={[styles.imageContainer]}>
            <View style={styles.cardPicContainer}>
              <Image
                style={styles.cardPic}
                source={require("../../assets/images/animals2.jpg")}
              />
            </View>
          </View>
        </Press>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "1%",
    marginBottom: "5%",
  },
  // slider: {
  //   // marginVertical: "1%",
  //   height: "100",
  // },
  intro: {
    fontFamily: "PlayfairDisplay_500Medium_Italic",
    textAlign: "center",
    lineHeight: 19,
    marginHorizontal: 15,
    marginVertical: "1%",
    fontSize: width < 700 ? 14 : 16,
  },
  highlight: {
    paddingVertical: 15,
    color: "#a12c01",
    fontSize: 16,
    fontWeight: "800",
    // fontFamily: "PlayfairDisplay_700Bold_Italic",
    textAlign: "center",
  },
  imageContainer: {
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 4,
  },
  highlightBack: {
    padding: 12,
    backgroundColor: "#0ac98990",
    alignItems: "center",
    borderRadius: 8,
    marginVertical: 10,
    overflow: "hidden",
  },
  testimonal: {
    color: "#db3c03",
    fontSize: 14,
    fontFamily: "PlayfairDisplay_700Bold_Italic",
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },

  cardPic: {
    width: "100%",
    height: height < 1100 ? 135 : 350,
    marginHorizontal: 20,
    opacity: 1,
    borderRadius: 12,
    marginBottom: 20,
  },
  cardPicContainer: {
    // flex: 1,
    width: "90%",
  },
});
