import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const CategoryMealsScreen = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Text>CategoryMealsScreen</Text>
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

const styles = StyleSheet.create({
  container: {},
});

export default CategoryMealsScreen;
