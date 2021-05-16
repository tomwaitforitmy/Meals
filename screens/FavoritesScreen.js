import React from "react";
import Colors from "../constants/Colors";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FavoritesScreen = (props) => {
  const favorites = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  );
  return <MealList mealsList={favorites} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = (props) => {
  return {
    headerTitle: "Favorites",
    headerStyle: {
      backgroundColor: Colors.second,
    },
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Drawer"
            iconName="ios-menu"
            onPress={() => {
              console.log("drawer");
              props.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    },
  };
};

export default FavoritesScreen;
