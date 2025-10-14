import { StyleSheet, View, Image } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/primeVideoLogo.png")}
      ></Image>
      <View style={styles.rightButtonsContainer}>
        <FontAwesome5 name="chromecast" size={24} color="white" />
        <Image
          style={styles.profile}
          source={require("../assets/profilePic.jpg")}
        ></Image>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 30,
    height: 80,
  },

  rightButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  image: {
    width: 80,
    height: 60,
    resizeMode: "contain",
  },

  profile: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    borderRadius: 30,
    marginLeft: 25,
  },
});
