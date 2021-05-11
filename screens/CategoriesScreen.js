import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridItem from "../components/CategoryGridItem";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridItem
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    ></FlatList>
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontFamily: "open-sans-bold",
  },
});

export default CategoriesScreen;
