import { StyleSheet, View, ScrollView } from "react-native";
import Header from "./components/Header";
import Activities from "./components/Activities";

export default function App() {
  const categoriesList = ["Movies", "TV Shows", "Sports", "Live TV", "Series"];

  return (
    <View style={styles.container}>
      <Header></Header>

      <ScrollView style={styles.activities} horizontal={true} >
        {categoriesList.map((category) => (
          <Activities activity={category}></Activities>
        ))}
      </ScrollView>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  activities: {
    height: 65,
    backgroundColor: "#000",
    flexDirection: "row",
  },
});
