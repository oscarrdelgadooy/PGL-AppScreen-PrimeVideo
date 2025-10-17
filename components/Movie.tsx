import { StyleSheet, View, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import color from "../theme/color";

type MovieProps = {
  path: ImageSourcePropType;
};

const Movie = ({ path }: MovieProps) => {
  return (
    <View style={styles.container}>
      <Image source={path} style={styles.size} />
      <LinearGradient
        colors={["transparent", "rgba(0, 0, 0, 0.5)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradient}
      />
      <Image
        source={require("../assets/miniLogoPrime.png")}
        style={styles.miniLogoSize}
      ></Image>
    </View>
  );
};

export default Movie;

const styles = StyleSheet.create({
  container: {
    width: 220,
    height: 120,
    marginRight: 15,
  },
  size: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  miniLogoSize: {
    width: 25,
    height: 15,
    bottom: 10,
    right: 10,
    color: color.fontColor,
    position: "absolute",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "30%",
  },
});
