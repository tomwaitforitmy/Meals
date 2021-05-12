import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const meal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Text>{meal.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default MealDetailScreen;
