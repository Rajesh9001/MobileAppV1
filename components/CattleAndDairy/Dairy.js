//https://github.com/Mudassirraza912/react-native-image-slider-banner
// https://www.youtube.com/watch?v=u4q3u3K8KY8

// import { Divider, Layout, TopNavigation } from "@ui-kitten/components";

import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useState, useCallback, useRef } from "react";
import { Button, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default function Dairy({ navigation }) {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <>
      <ScrollView style={styles.videoStyle}>
        <Text
          onPress={() => navigation.navigate("Cattle")}
          style={{
            textAlign: "center",
            fontSize: 16,
            color: "#970303",
            fontWeight: "bold",
          }}
        >
          Dairy Project
        </Text>
        <Text
          style={{
            maxWidth: 350,
            textAlign: "center",
            margin: 10,
            fontWeight: "500",
            color: "#311607",
          }}
        >
          Dairy farming in one of the most economically viable self-employment
          enterprise attracting the attention of educated un-employed youth,
          small, marginal and landless labours as main / subsidiary occupation
          to agriculture.
        </Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View style={styles.videoContainer}>
            <View style={styles.videoHeader}>
              <Text style={styles.videoName}>Dairy Project (Cost)</Text>
            </View>
            <YoutubePlayer
              height={210}
              width={300}
              play={playing}
              videoId={"7DUi0zRVx5k"}
              onChangeState={onStateChange}
            />
          </View>
          <View style={styles.videoContainer}>
            <View style={styles.videoHeader}>
              <Text style={styles.videoName}>TMR feeding</Text>
            </View>
            <YoutubePlayer
              height={210}
              width={300}
              play={playing}
              videoId={"yB67QrQN9Ns"}
              onChangeState={onStateChange}
            />
          </View>
          <View style={styles.videoContainer}>
            <View style={styles.videoHeader}>
              <Text style={styles.videoName}>Dairy Project (Cost)</Text>
            </View>
            <YoutubePlayer
              height={210}
              width={300}
              play={playing}
              videoId={"xdGBkjelhsI"}
              onChangeState={onStateChange}
            />
          </View>
          <View style={styles.videoContainer}>
            <View style={styles.videoHeader}>
              <Text style={styles.videoName}>Dairy Project </Text>
            </View>

            <YoutubePlayer
              height={210}
              width={300}
              play={playing}
              videoId={"po_M9mCumoM"}
              onChangeState={onStateChange}
            />
          </View>
          <View style={styles.videoContainer}>
            <View style={styles.videoHeader}>
              <Text style={styles.videoName}>Dairy Project </Text>
            </View>
            <YoutubePlayer
              height={210}
              width={300}
              play={playing}
              videoId={"xbRtlZtf19c"}
              onChangeState={onStateChange}
            />
          </View>
          <View style={styles.videoContainer}>
            <View style={styles.videoHeader}>
              <Text style={styles.videoName}>Dairy Project </Text>
            </View>

            <YoutubePlayer
              height={210}
              width={300}
              play={playing}
              videoId={"xMc6ypD6hMo"}
              onChangeState={onStateChange}
            />
          </View>

          <View style={styles.videoContainer}>
            <View style={styles.videoHeader}>
              <Text style={styles.videoName}>Organic Farming</Text>
            </View>
            <YoutubePlayer
              height={210}
              width={300}
              play={playing}
              videoId={"RrmcRj6zmd0"}
              onChangeState={onStateChange}
            />
          </View>
          <View style={styles.videoContainer}>
            <View style={styles.videoHeader}>
              <Text style={styles.videoName}>Punganur cattle</Text>
            </View>
            <YoutubePlayer
              height={210}
              width={300}
              play={playing}
              videoId={"C_k-w5KYSQ4"}
              onChangeState={onStateChange}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  videoStyle: { margin: 15 },
  videoHeader: {
    backgroundColor: "#928e8e",
    marginBottom: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  videoContainer: {
    backgroundColor: "#928e8e",
    paddingTop: 10,
    height: 260,
    borderRadius: 5,
    marginBottom: 25,
    //  marginHorizontal: width > 390 ? "22%" : 0,
    width: 330,
    alignItems: "center",
  },
  videoName: {
    color: "#f6f4f4",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
