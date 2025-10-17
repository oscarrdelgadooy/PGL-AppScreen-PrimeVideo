import {
  StyleProp,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextStyle,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import Movie from "../components/Movie";

type ListMoviesProps = {
  title: String;
  imagenes: any[];
  style_text: StyleProp<TextStyle>;
};

const ListMovies = ({ title, imagenes, style_text }: ListMoviesProps) => {
  return (
    <View>
      <Text style={style_text}>
        {title}
        {"  "}
        <FontAwesome5 name="chevron-right" size={12} color="#a3a3a3ff" />
      </Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {imagenes.map((imagen) => (
          <Movie key={imagen} path={imagen}></Movie>
        ))}
      </ScrollView>
    </View>
  );
};

export default ListMovies;

const styles = StyleSheet.create({});
