import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Colors from "../constants/Colors";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const categoryId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Meal Details"
        onPress={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
          });
        }}
      ></Button>
      <Button
        title="Back"
        onPress={() => {
          props.navigation.goBack();
        }}
      ></Button>
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: "white",
  };
};

const styles = StyleSheet.create({
  container: {},
});

export default CategoryMealsScreen;
