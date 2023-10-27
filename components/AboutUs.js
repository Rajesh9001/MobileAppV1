import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import Press from "../ui/Press";
import OpactiyAnimation from "../ui/OpacityAnimation";

function AboutUs() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Dr. Y. RavindraReddy</Text>
        <View style={styles.imagecontainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/a.png")}
          />
        </View>
      </View>
      <ScrollView
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
        style={styles.container}
      >
        <Text style={styles.intro}>
          {"    "}
          Motivating and talented
          <Text style={[styles.highlight, { color: "#b00505", fontSize: 12 }]}>
            {" "}
            LIVESTOCK PRODUCTION MANAGEMENT{" "}
          </Text>
          Professor driven to inspire students to pursue academic and personal
          excellence. Consistently strive to create a challenging and engaging
          learning environment in which students become life-long scholars and
          learners. Has
          <Text style={styles.highlight}> 20 years of experience</Text> in Dairy
          Cattle and Sheep production.
        </Text>
        <View style={styles.highlightBack}>
          <Text style={[styles.highlight, { fontSize: 16 }]}>
            Details of
            <Text style={{ color: "#b00505", fontSize: 16 }}> academic </Text>
            qualifications
          </Text>
        </View>
        <View style={{ marginBottom: 30 }}>
          <OpactiyAnimation>
            <View style={styles.inputContainer}>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>B.V.Sc & A.H.</Text>
                <View style={styles.cardTextConatiner}>
                  <View style={[styles.cardText, { width: "55%" }]}>
                    <Text style={styles.cardTextKey}>Date of Joining</Text>
                    <Text style={styles.cardTextKey}>Date of Leaving</Text>
                    <Text style={[styles.cardTextKey, { height: "30%" }]}>
                      Name of the school /College
                    </Text>
                    <Text style={styles.cardTextKey}>Name of the Board</Text>
                  </View>
                  <View style={[styles.cardText, { width: "45%" }]}>
                    <Text style={styles.cardTextValue}>September - 1988</Text>
                    <Text style={styles.cardTextValue}>August - 1993</Text>
                    <Text
                      style={[
                        styles.cardTextValue,
                        { height: "30%", lineHeight: 18 },
                      ]}
                    >
                      College of Vety science, Tirupati
                    </Text>
                    <Text style={[styles.cardTextValue, { lineHeight: 20 }]}>
                      Andhra Pradesh, AGRL University.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </OpactiyAnimation>
          <OpactiyAnimation>
            <View style={styles.inputContainer}>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>M.V.Sc & A.H.</Text>
                <View style={styles.cardTextConatiner}>
                  <View style={[styles.cardText, { width: "55%" }]}>
                    <Text style={styles.cardTextKey}>Date of Joining</Text>
                    <Text style={styles.cardTextKey}>Date of Leaving</Text>
                    <Text style={[styles.cardTextKey, { height: "34%" }]}>
                      Name of the school /College
                    </Text>
                    <Text style={styles.cardTextKey}>Name of the Board</Text>
                  </View>
                  <View style={[styles.cardText, { width: "45%" }]}>
                    <Text style={styles.cardTextValue}>July - 1993</Text>
                    <Text style={styles.cardTextValue}>October -1995</Text>
                    <Text
                      style={[
                        styles.cardTextValue,
                        { height: "34%", lineHeight: 18 },
                      ]}
                    >
                      College of Vety science, Rajendra Nagar
                    </Text>
                    <Text style={[styles.cardTextValue, { lineHeight: 20 }]}>
                      Andhra Pradesh, AGRL University.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </OpactiyAnimation>
          <OpactiyAnimation>
            <View style={styles.inputContainer}>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Ph.D(LPM)</Text>
                <View style={styles.cardTextConatiner}>
                  <View style={[styles.cardText, { width: "55%" }]}>
                    <Text style={styles.cardTextKey}>Date of Joining</Text>
                    <Text style={styles.cardTextKey}>Date of Leaving</Text>
                    <Text style={[styles.cardTextKey, { height: "34%" }]}>
                      Name of the school /College
                    </Text>
                    <Text style={styles.cardTextKey}>Name of the Board</Text>
                  </View>
                  <View style={styles.cardText}>
                    <Text style={styles.cardTextValue}>March - 2005</Text>
                    <Text style={styles.cardTextValue}>November - 2008</Text>
                    <Text
                      style={[
                        styles.cardTextValue,
                        { height: "34%", lineHeight: 18 },
                      ]}
                    >
                      College of Vety science, Rajendra Nagar
                    </Text>
                    <Text style={[styles.cardTextValue, {}]}>
                      S.V.V.U. Tirupati
                    </Text>
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

export default AboutUs;

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
    width: "50%",
    height: 180,
  },
  cardTextValue: {
    fontSize: 14,
    lineHeight: 25,
    height: "22%",
    width: "100%",
  },
  cardTextKey: {
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 25,
    height: "22%",
  },
  card: {
    flex: 1,
    borderColor: "#797878",
    // borderWidth: 1,
    elevation: 4,
    borderRadius: 5,
    backgroundColor: "#ccc4bf",
    width: "95%",
    marginVertical: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
});
