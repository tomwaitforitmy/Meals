import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CategoryMealsScreen = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Text>CategoryMealsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CategoryMealsScreen;
