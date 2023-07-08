import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>BMI CALCULATOR</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    margin: 0,
    padding: 0,
    backgroundColor: "#007FFF",
    height: 60,
    width: "100%",
    display: "flex",
  },
  headerText: {
    textAlign: "left",
    marginHorizontal: 10,
    marginVertical: 15,
    color: "#fff",
    fontSize: 22,
  },
});
