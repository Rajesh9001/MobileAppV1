import {
  Button,
  Image,
  ImageBackground,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { useState } from "react";

function RecentWorks() {
  const [back, setBack] = useState(false);
  function clicked() {
    setBack(true);
  }

  return (
    <View style={styles.rootContainer}>
      {/* <Text style={styles.title} onPress={clicked}>
        Back
      </Text> */}
      <ScrollView>
        <View style={styles.inputContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/images/a.png")}
          />
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Cattle Farming</Text>
            <Text style={styles.cardText}>
              Cattle farming involves rearing and management of two types of
              animals- one group for food requirements like milk and another for
              labour purposes like ploughing, irrigation, etc. Animals which
              provide milk are called milch/dairy animals.
            </Text>
            <View style={styles.cardPicContainer}>
              <Image
                style={styles.cardPic}
                source={require("../../assets/images/calf1.png")}
              />
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Sankara jaati pashuvula yajamanyam
            </Text>
            <View style={styles.cardPicContainer}>
              <Image
                style={styles.cardPic}
                source={require("../../assets/images/recent1.jpeg")}
              />
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Azolla and Sheetnut calle sheep production system
            </Text>
            <View style={styles.cardPicContainer}>
              <Image
                style={styles.cardPic}
                source={require("../../assets/images/recent2.jpeg")}
              />
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Paadi pashuvula pempakam</Text>
            <View style={styles.cardPicContainer}>
              <Image
                style={styles.cardPic}
                source={require("../../assets/images/recent3.jpeg")}
              />
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Model Training Course</Text>
            <View style={styles.cardPicContainer}>
              <Image
                style={styles.cardPic}
                source={require("../../assets/images/recent4.jpeg")}
              />
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Integrated Farming System(Sheep + goat)
            </Text>
            <View style={styles.cardPicContainer}>
              <Image
                style={styles.cardPic}
                source={require("../../assets/images/recent5.jpeg")}
              />
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Sahiwal cattle</Text>
            <View style={styles.cardPicContainer}>
              <Image
                style={styles.cardPic}
                source={require("../../assets/images/recent6.jpeg")}
              />
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>chaff cutter demo</Text>
            <View style={styles.cardPicContainer}>
              <Image
                style={styles.cardPic}
                source={require("../../assets/images/recent7.jpeg")}
              />
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              "Cattle" Ongole cow with its calf.
            </Text>
            <View style={styles.cardPicContainer}>
              <Image
                style={styles.cardPic}
                source={require("../../assets/images/recent8.jpeg")}
              />
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              "Cattle" Jersy x Sahiwal crossbred cow
            </Text>
            <View style={styles.cardPicContainer}>
              <Image
                style={styles.cardPic}
                source={require("../../assets/images/recent9.jpeg")}
              />
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              "Azolla" collection of azolla from pit
            </Text>
            <View style={styles.cardPicContainer}>
              <Image
                style={styles.cardPic}
                source={require("../../assets/images/recent10.jpeg")}
              />
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>"Azolla" Good growth of azolla</Text>
            <View style={styles.cardPicContainer}>
              <Image
                style={styles.cardPic}
                source={require("../../assets/images/recent11.jpeg")}
              />
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              "Sheep" Grazing for atleast 6 to 8 hours
            </Text>
            <View style={styles.cardPicContainer}>
              <Image
                style={styles.cardPic}
                source={require("../../assets/images/recent12.jpeg")}
              />
            </View>
          </View>

          {/* <Text>{name}</Text> */}
          <TextInput
            style={styles.textInput}
            placeholder="Your course goal!"
            // onChangeText={goalInputHandler}
            // value={enteredGoalText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Cancel" color="#86184b" />
            </View>
            <View style={styles.button}>
              <Button
                title="Add Goal"
                // onPress={addGoalHandler}
                color="#6822c4"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default RecentWorks;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: "15%",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    height: "100%",
  },
  image: {
    width: 120,
    height: 120,
    margin: 20,
    borderRadius: 60,
    borderColor: "#66b594",
    borderWidth: 2,
  },
  cardPic: {
    width: "100%",
    height: 200,
    margin: 20,
    opacity: 1,
    borderRadius: 5,
  },
  cardPicContainer: {
    flex: 1,
    width: "90%",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },

  backgroundImage: {
    opacity: 0.3,
  },
  cardTitle: {
    marginTop: 5,
    fontSize: 18,
    // fontWeight: "bold",
    textAlign: "center",
    paddingTop: 5,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    // fontWeight: "bold",
    color: "#f9fbf6",
    borderColor: "#5c5a5a",
    borderWidth: 1,
    backgroundColor: "#6eb574b6",
    width: "50%",
    padding: 2,
    textAlign: "center",
    opacity: 0.95,
    borderRadius: 5,
  },
  cardText: {
    marginTop: 5,
    fontSize: 14,
    // fontWeight: 500,
    textAlign: "center",
    paddingHorizontal: 5,
  },
  card: {
    flex: 1,
    padding: 5,
    borderColor: "#797878",
    // borderWidth: 1,
    elevation: 2,
    // opacity: 0.75,
    borderRadius: 5,
    backgroundColor: "#579368",
    width: "100%",
    margin: 10,
  },
  a: {
    marginTop: 10,
    alignItems: "center",
  },
});
