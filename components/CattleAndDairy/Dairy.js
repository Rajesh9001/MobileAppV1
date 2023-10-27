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
        <View style={styles.videoContainer}>
          <View style={styles.videoHeader}>
            <Text style={styles.videoName}>Dairy Project (Cost)</Text>
          </View>
          <YoutubePlayer
            height={210}
            width={width > 890 ? 400 : 340}
            play={playing}
            videoId={"7DUi0zRVx5k"}
            onChangeState={onStateChange}
          />
        </View>
        <View style={styles.videoContainer}>
          <View style={styles.videoHeader}>
            <Text style={styles.videoName}>Dairy Project (Cost)</Text>
          </View>

          <YoutubePlayer
            height={210}
            width={width > 390 ? 400 : 340}
            play={playing}
            videoId={"CWSzCapfdQ4"}
            onChangeState={onStateChange}
          />
        </View>
        <View style={styles.videoContainer}>
          <View style={styles.videoHeader}>
            <Text style={styles.videoName}>Dairy Project (Cost)</Text>
          </View>
          <YoutubePlayer
            height={210}
            width={width > 390 ? 400 : 300}
            play={playing}
            videoId={"xdGBkjelhsI"}
            onChangeState={onStateChange}
          />
        </View>
        <View style={styles.videoContainer}>
          <View style={styles.videoHeader}>
            <Text style={styles.videoName}>Dairy Project (Cost)</Text>
          </View>

          <YoutubePlayer
            height={210}
            width={width > 390 ? 400 : 300}
            play={playing}
            videoId={"po_M9mCumoM"}
            onChangeState={onStateChange}
          />
        </View>
        <View style={styles.videoContainer}>
          <View style={styles.videoHeader}>
            <Text style={styles.videoName}>Dairy Project (Cost)</Text>
          </View>
          <YoutubePlayer
            height={210}
            width={width > 390 ? 400 : 300}
            play={playing}
            videoId={"xbRtlZtf19c"}
            onChangeState={onStateChange}
          />
        </View>
        <View style={styles.videoContainer}>
          <View style={styles.videoHeader}>
            <Text style={styles.videoName}>Dairy Project (Cost)</Text>
          </View>

          <YoutubePlayer
            height={210}
            width={width > 390 ? 400 : 300}
            play={playing}
            videoId={"xMc6ypD6hMo"}
            onChangeState={onStateChange}
          />
        </View>
        {/* <View style={styles.videoContainer}>
          <View style={styles.videoHeader}>
            <Text style={styles.videoName}>Dairy Project (Cost)</Text>
          </View>
          <YoutubePlayer
            height={210}
            width={width > 400 ? 400 : 300}
            play={playing}
            videoId={"MBlgaPguCaQ"}
            onChangeState={onStateChange}
          />
        </View> */}
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
    padding: width < 890 ? 10 : 25,
    height: 260,
    borderRadius: 5,
    marginBottom: 25,
    //  marginHorizontal: width > 390 ? "22%" : 0,
    width: width < 890 ? 360 : 440,
    alignItems: "center",
  },
  videoName: {
    color: "#f6f4f4",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
