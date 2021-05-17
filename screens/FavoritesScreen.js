import React from "react";
import { useSelector } from "react-redux";
import Colors from "../constants/Colors";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FavoritesScreen = (props) => {
  const favorites = useSelector((state) => state.meals.favoriteMeals);

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
