import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Platform } from "react-native";

import CategoriesScreen from "../screens/CategoriesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import CategoryMealScreen from "../screens/CategoryMealsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealScreen,
    MealDetail: MealDetailScreen,
  },
  {
    //Default values:
    // headerMode: "screen",
    // initialRouteName: "Categories",
    mode: "modal",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: "white",
      headerTitle: "A dummy title",
    },
  }
);

const myTabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="ios-restaurant"
            size={25}
            color={tabInfo.tintColor}
          ></Ionicons>
        );
      },
      tabBarColor: Colors.primary,
    },
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="ios-star"
            size={25}
            color={tabInfo.tintColor}
          ></Ionicons>
        );
      },
      tabBarColor: Colors.second,
    },
  },
};

const TabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(myTabScreenConfig, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(myTabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.primary,
        },
      });

export default createAppContainer(TabNavigator);
