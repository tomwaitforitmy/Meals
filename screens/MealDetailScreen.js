import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
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

//Todo Tommy: Hier sagt er es muss navigationData heissen.
//Experiment ob es auch props sein kann.
MealDetailScreen.navigationOptions = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const meal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: meal.title,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Favorite"
            iconName="ios-star"
            onPress={() => {
              console.log("fav");
            }}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  container: {},
});

export default MealDetailScreen;
