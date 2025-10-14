import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

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
    </View>
  );
};

export default Movie;

const styles = StyleSheet.create({
  container: {
    width: 220,
    height: 120,
    marginRight: 15
  },
  size: {
    width: 220,
    height: 120,
    borderRadius: 10,
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "30%",
  },
});
