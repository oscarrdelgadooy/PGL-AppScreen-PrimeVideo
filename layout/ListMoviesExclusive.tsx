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
import MovieNew from "../components/MovieNew";

type ListMoviesExclusiveProps = {
  title: String;
  imagenes: any[];
  style_text: StyleProp<TextStyle>;
};

const ListMoviesExclusive = ({
  title,
  imagenes,
  style_text,
}: ListMoviesExclusiveProps) => {
  return (
    <View>
      <Text style={style_text}>
        Amazon Originals and Exclusives{"  "}
        <FontAwesome5 name="chevron-right" size={12} color="#a3a3a3ff" />
      </Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {imagenes.map((imagen) => (
          <MovieNew key={imagen} path={imagen}></MovieNew>
        ))}
      </ScrollView>
    </View>
  );
};

export default ListMoviesExclusive;

const styles = StyleSheet.create({});
