import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import MovieBanner from "./components/MovieBanner";
import Footer from "./components/Footer";
import { useState } from "react";
import color from "./theme/color";
import ListActivities from "./layout/ListActivities";
import ListMovies from "./layout/ListMovies";
import ListMoviesExclusive from "./layout/ListMoviesExclusive";
import imagenes from "./data/images";
import categoriesList from "./data/categories";

export default function App() {
  const [randomPic, setRandomPic] = useState(imagenes[0]);

  const randomizarImagen = () => {
    const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
    const nuevaImagen = imagenes[indiceAleatorio];
    setRandomPic(nuevaImagen);
  };

  return (
    <View style={styles.container}>
      <Header></Header>
      <ListActivities activityList={categoriesList}></ListActivities>

      <MovieBanner
        path={randomPic}
        FuncRandom={randomizarImagen}
        style={styles.banner}
      ></MovieBanner>

      <ListMovies
        title="Top movies"
        imagenes={imagenes}
        style_text={styles.top_movies}
      ></ListMovies>

      <ListMoviesExclusive
        title="Amazon Originals and Exclusives"
        imagenes={imagenes}
        style_text={styles.top_movies}
      ></ListMoviesExclusive>

      <Footer></Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.backgroundColor,
  },

  banner: {
    height: 200,
  },

  top_movies: {
    color: color.fontColor,
    marginBottom: 10,
    marginLeft: 7,
    marginTop: 5,
  },
});
