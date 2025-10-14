import {
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { LinearGradient } from "expo-linear-gradient";
import color from "../theme/color";

type MovieBannerProps = {
  path: ImageSourcePropType;
  FuncRandom: () => void;
};

const MovieBanner = ({ path, FuncRandom }: MovieBannerProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={path} style={styles.photoSize} />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0.4)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradient}
        />

        <FontAwesome5
          name="check-circle"
          size={15}
          color="blue"
          style={styles.primeLogo}
        />
        <Text style={styles.primeText}>Included with Prime</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={FuncRandom} style={styles.button}>
          <FontAwesome5 name="ellipsis-h" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MovieBanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  primeLogo: {
    position: "absolute",
    bottom: 0,
    left: 20,
  },

  primeText: {
    color: "#fff",
    position: "absolute",
    bottom: 0,
    left: 40,
    fontSize: 12,
    fontWeight: "bold",
  },

  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 9,
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
  },
  buttonContainer: {
    backgroundColor: color.backgroundColor,
  },
  button: {
    alignItems: "center",
    width: 45,
    alignSelf: "center",
  },
});
