import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";

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
    borderWidth: 1,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    margin: 3
  },

  buttonText: {
    color: "#fff",
    textAlign: 'center',

  },
});
