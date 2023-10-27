import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Pdf from "react-native-pdf";

const pdf = () => {
  const PdfResource = {
    uri:
      "gs://firstapp-abfb9.appspot.com/Tirumala Tirupati Devasthanams(Official Booking Portal).pdf",
    cache: true,
  };

  return (
    <View style={styles.container}>
      <Pdf
        trustAllCerts={false}
        source={PdfResource}
        style={styles.pdf}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
        }}
      />
    </View>
  );
};

export default pdf;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
