import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ImageSourcePropType,
} from "react-native";
import React from "react";

type MovieBannerProps = {
  path: ImageSourcePropType;
  FuncRandom: () => void;
};

const MovieBanner = ({ path, FuncRandom }: MovieBannerProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={path} style={styles.photoSize} />
        <View style={styles.gradient}></View>
      </View>
      <View style={styles.button}>
        <Button title="" color={"#000"} onPress={FuncRandom} />
      </View>
    </View>
  );
};

export default MovieBanner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },

  imageContainer: {
    flex: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  photoSize: {
    width: "100%",
    height: "100%",
  },

  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "30%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  button: {
    flex: 2,
    justifyContent: "center",
  },
});
