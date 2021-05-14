import React from "react";
import Colors from "../constants/Colors";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = (props) => {
  const favorites = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  );
  return <MealList mealsList={favorites} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: "Favorites",
  headerStyle: {
    backgroundColor: Colors.second,
  },
};

export default FavoritesScreen;
