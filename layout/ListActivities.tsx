import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Activities from "../components/Activities";

type ListActivitiesProps = {
  activityList: any[];
};

const ListActivities = ({ activityList }: ListActivitiesProps) => {
  return (
    <View style={styles.scrollview}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {activityList.map((category) => (
          <Activities key={category} activity={category}></Activities>
        ))}
      </ScrollView>
    </View>
  );
};

export default ListActivities;

const styles = StyleSheet.create({
  scrollview: {
    height: 65,
  },
});
