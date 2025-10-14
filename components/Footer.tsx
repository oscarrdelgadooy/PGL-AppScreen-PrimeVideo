import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <FontAwesome5 name="home" size={20} color="#7c7b7bff" />
        <Text style={styles.buttonText}>Home</Text>
      </View>
      <View style={styles.buttonContainer}>
        <FontAwesome5 name="check-circle" size={20} color="#7c7b7bff" />
        <Text style={styles.buttonText}>Prime</Text>
      </View>
      <View style={styles.buttonContainer}>
        <FontAwesome5 name="th-large" size={20} color="#7c7b7bff" />
        <Text style={styles.buttonText}>Subscription</Text>
      </View>
      <View style={styles.buttonContainer}>
        <FontAwesome5 name="download" size={20} color="#7c7b7bff" />
        <Text style={styles.buttonText}>Downloads</Text>
      </View>
      <View style={styles.buttonContainer}>
        <FontAwesome5 name="search" size={20} color="#7c7b7bff" />
        <Text style={styles.buttonText}>Search</Text>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#000",
    width: "100%",
    height: 50,
    bottom: 7,
    flexDirection: "row",
    borderWidth: 3,
    borderTopColor: "#7c7b7bff",
  },
  buttonContainer: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#7c7b7bff",
    fontSize: 12,
  },
});
