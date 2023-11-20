import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import Press from "../ui/Press";
import OpactiyAnimation from "../ui/OpacityAnimation";
import { useContext } from "react";
import { Context } from "../store/Context";

function Teaching() {
  const context = useContext(Context);
  //   const { name, phoneNumber } = context;
  return (
    <>
      <View style={styles.header}>
        <Text>{context.phoneNumber}</Text>
        <Text style={styles.title}>Dr. Y. RavindraReddy</Text>
        <View style={styles.imagecontainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/a.jpg")}
          />
        </View>
      </View>
      <ScrollView
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
        style={styles.container}
      >
        {/* <TextInput
          placeholder="Name"
          // onChangeText={updateName}
          value={context.city}
          onChangeText={(city) => {F
            context.setCity(city);
          }}
          color="black"
          backgroundColor="white"
          style={styles.textInput}
        /> */}
        <Text style={styles.intro}>
          {" "}
          <Text style={styles.highlight}>
            Every day you’ll get the chance to inspire young people{" "}
          </Text>
          and use your skills to give something back – making sure every pupil
          gets the same access to a quality education and the opportunity to
          succeed.
        </Text>
        <View style={styles.highlightBack}>
          <Text style={[styles.highlight, { fontSize: 16 }]}>
            Details of
            <Text style={{ color: "#b00505", fontSize: 16 }}> Employment </Text>
            record
          </Text>
        </View>
        <View style={{ marginBottom: 30 }}>
          <OpactiyAnimation>
            <View style={styles.inputContainer}>
              <View style={styles.card}>
                <View style={styles.cardTextConatiner}>
                  <View style={[styles.cardText]}>
                    <Text style={styles.cardTextKey}>Designation</Text>
                    <Text style={styles.cardTextKey}>Date of Joining</Text>
                    <Text style={styles.cardTextKey}>Date of Leaving</Text>
                    <Text style={styles.cardTextKey}>Employment</Text>
                  </View>
                  <View style={[styles.cardText]}>
                    <Text style={styles.cardTextValue}>Professor</Text>

                    <Text style={styles.cardTextValue}>24-10-2012</Text>
                    <Text style={styles.cardTextValue}>Till Date</Text>

                    <Text style={[styles.cardTextValue]}>Till Date</Text>
                  </View>
                </View>
              </View>
            </View>
          </OpactiyAnimation>
          <OpactiyAnimation>
            <View style={styles.inputContainer}>
              <View style={styles.card}>
                <View style={styles.cardTextConatiner}>
                  <View style={[styles.cardText, { width: "50%" }]}>
                    <Text style={styles.cardTextKey}>Designation</Text>
                    <Text style={styles.cardTextKey}>Date of Joining</Text>
                    <Text style={styles.cardTextKey}>Date of Leaving</Text>
                    <Text style={styles.cardTextKey}>Employment</Text>
                  </View>
                  <View style={[styles.cardText, { width: "50%" }]}>
                    <Text style={styles.cardTextValue}>
                      Associate Professor
                    </Text>

                    <Text style={styles.cardTextValue}>12-02-2009</Text>
                    <Text style={styles.cardTextValue}>23-10-2012</Text>

                    <Text style={[styles.cardTextValue]}>2.8 Years</Text>
                  </View>
                </View>
              </View>
            </View>
          </OpactiyAnimation>
          <OpactiyAnimation>
            <View style={styles.inputContainer}>
              <View style={styles.card}>
                <View style={styles.cardTextConatiner}>
                  <View style={[styles.cardText]}>
                    <Text style={styles.cardTextKey}>Designation</Text>
                    <Text style={styles.cardTextKey}>Date of Joining</Text>
                    <Text style={styles.cardTextKey}>Date of Leaving</Text>
                    <Text style={styles.cardTextKey}>Employment</Text>
                  </View>
                  <View style={[styles.cardText]}>
                    <Text style={styles.cardTextValue}>
                      Assistant Professor
                    </Text>

                    <Text style={styles.cardTextValue}>31-12-2008</Text>
                    <Text style={styles.cardTextValue}>11-02-2009</Text>

                    <Text style={[styles.cardTextValue]}>0.2 Months</Text>
                  </View>
                </View>
              </View>
            </View>
          </OpactiyAnimation>
          <OpactiyAnimation>
            <View style={styles.inputContainer}>
              <View style={styles.card}>
                <View style={styles.cardTextConatiner}>
                  <View style={[styles.cardText]}>
                    <Text style={styles.cardTextKey}>Designation</Text>
                    <Text style={styles.cardTextKey}>Date of Joining</Text>
                    <Text style={styles.cardTextKey}>Date of Leaving</Text>
                    <Text style={styles.cardTextKey}>Employment</Text>
                  </View>
                  <View style={[styles.cardText]}>
                    <Text style={styles.cardTextValue}>Scientist</Text>

                    <Text style={styles.cardTextValue}>17-10-2006</Text>
                    <Text style={styles.cardTextValue}>30-12-2008</Text>

                    <Text style={[styles.cardTextValue]}>2.2 Years</Text>
                  </View>
                </View>
              </View>
            </View>
          </OpactiyAnimation>
          <OpactiyAnimation>
            <View style={styles.inputContainer}>
              <View style={styles.card}>
                <View style={styles.cardTextConatiner}>
                  <View style={[styles.cardText]}>
                    <Text style={styles.cardTextKey}>Designation</Text>
                    <Text style={styles.cardTextKey}>Date of Joining</Text>
                    <Text style={styles.cardTextKey}>Date of Leaving</Text>
                    <Text style={styles.cardTextKey}>Employment</Text>
                  </View>
                  <View style={[styles.cardText]}>
                    <Text style={styles.cardTextValue}>
                      Associate Professor
                    </Text>

                    <Text style={styles.cardTextValue}>21-03-2005</Text>
                    <Text style={styles.cardTextValue}>10-10-2006</Text>

                    <Text style={[styles.cardTextValue]}>1.7 Years</Text>
                  </View>
                </View>
              </View>
            </View>
          </OpactiyAnimation>
          <OpactiyAnimation>
            <View style={styles.inputContainer}>
              <View style={styles.card}>
                <View style={styles.cardTextConatiner}>
                  <View style={[styles.cardText]}>
                    <Text style={styles.cardTextKey}>Designation</Text>
                    <Text style={styles.cardTextKey}>Date of Joining</Text>
                    <Text style={styles.cardTextKey}>Date of Leaving</Text>
                    <Text style={styles.cardTextKey}>Employment</Text>
                  </View>
                  <View style={[styles.cardText]}>
                    <Text style={styles.cardTextValue}>Scientist</Text>

                    <Text style={styles.cardTextValue}>17-11-1997</Text>
                    <Text style={styles.cardTextValue}>17-3-2005</Text>

                    <Text style={[styles.cardTextValue]}>7.5 Years</Text>
                  </View>
                </View>
              </View>
            </View>
          </OpactiyAnimation>
        </View>
      </ScrollView>
    </>
  );
}

export default Teaching;

const styles = StyleSheet.create({
  container: { marginHorizontal: 20 },
  inputContainer: {
    alignItems: "center",
    width: "100%",
  },
  header: { marginTop: 20 },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    color: "#b00505",
  },
  intro: {
    // fontWeight: "800",
    textAlign: "center",
    lineHeight: 19,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  highlight: {
    fontWeight: "bold",
  },
  highlightBack: {
    padding: 12,
    backgroundColor: "#58b870",
    alignItems: "center",
    borderRadius: 8,
    marginVertical: 10,
    overflow: "hidden",
  },
  image: {
    width: 120,
    height: 120,
    margin: 20,
    borderRadius: 60,
    borderColor: "#66b594",
    borderWidth: 2,
  },
  imagecontainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 140,
  },

  cardTitle: {
    marginVertical: 6,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 5,
  },
  cardTextConatiner: {
    flex: 1,
    flexDirection: "row",
  },
  cardText: {
    marginVertical: 5,
    paddingHorizontal: 15,
    paddingTop: 15,
    width: "50%",
    height: 160,
  },
  cardTextValue: {
    fontSize: 14,
    height: "25%",
    width: "100%",
  },
  cardTextKey: {
    fontSize: 15,
    fontWeight: "600",
    paddingLeft: 15,
    height: "25%",
  },
  card: {
    flex: 1,
    borderColor: "#797878",
    // borderWidth: 1,

    elevation: 4,
    borderRadius: 5,
    backgroundColor: "#83bba4c2",
    width: "95%",
    marginVertical: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
});
