import { StyleSheet, View, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

type MovieNewProps = {
  path: ImageSourcePropType;
};

const MovieNew = ({ path }: MovieNewProps) => {
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

export default MovieNew;

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 300,
    marginRight: 15,
  },
  size: {
    width: "100%",
    height: "100%",
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
