import { StyleSheet, View, ScrollView, Image } from "react-native";
import Header from "./components/Header";
import Activities from "./components/Activities";
import MovieBanner from "./components/MovieBanner";
import { useState } from "react";

export default function App() {
  const categoriesList = ["Movies", "TV Shows", "Sports", "Live TV", "Series"];

  const imagenes = [
    require("./assets/hotel_costiera.png"),
    require("./assets/play_dirty.jpg"),
    require("./assets/stranger_things.jpg"),
    require("./assets/shameless.jpg"),
  ];

  const [randomPic, setRandomPic] = useState(imagenes[0]);

  const randomizarImagen = () => {
    const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
    const nuevaImagen = imagenes[indiceAleatorio];
    setRandomPic(nuevaImagen);
  };

  return (
    <View style={styles.container}>
      <Header></Header>

      <View style={styles.scrollview} >
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {categoriesList.map((category) => (
          <Activities key={category} activity={category}></Activities>
        ))}
      </ScrollView>
      </View>



      <View style={styles.banner}>
        <MovieBanner
          path={randomPic}
          FuncRandom={randomizarImagen}
        ></MovieBanner>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  scrollview:{
    height: 65
  },

  banner:{
    height: 200,
  },


});
