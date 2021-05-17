import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import DefaultText from "../components/DefaultText";
import HeaderButton from "../components/HeaderButton";
import { toggleFavorite } from "../store/actions/mealsAction";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.meals);
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({
      toggleFavorite: toggleFavoriteHandler,
    });
  }, [toggleFavoriteHandler]);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: selectedMeal.imageUrl }}
        style={styles.image}
      ></Image>
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity}</DefaultText>
        <DefaultText>{selectedMeal.affordability}</DefaultText>
      </View>
      <DefaultText style={styles.title}>Ingredients</DefaultText>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <DefaultText style={styles.title}>Steps</DefaultText>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

//Todo Tommy: Hier sagt er es muss navigationData heissen.
//Experiment ob es auch props sein kann.
MealDetailScreen.navigationOptions = (props) => {
  const mealTitle = props.navigation.getParam("mealTitle");
  const toggleFavorite = props.navigation.getParam("toggleFavorite");

  return {
    headerTitle: mealTitle,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Favorite" iconName="ios-star" onPress={toggleFavorite} />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  container: {
    flex: 1,
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
