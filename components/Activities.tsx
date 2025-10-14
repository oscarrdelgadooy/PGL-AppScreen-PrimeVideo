import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

type ActivitiesProps = {
  activity: String;
};

const Activities = ({ activity }: ActivitiesProps) => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{activity}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Activities;

const styles = StyleSheet.create({
  button: {
    height: 38,
    width: 80,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#524c4c5d",
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
    marginBottom: 20,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
