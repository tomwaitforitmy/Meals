import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const CategoriesScreen = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Text>CategoriesScreen</Text>
      <Button
        title="Go to Category Meals"
        onPress={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
          });
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CategoriesScreen;
