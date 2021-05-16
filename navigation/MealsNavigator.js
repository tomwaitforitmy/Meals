import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Platform } from "react-native";

import CategoriesScreen from "../screens/CategoriesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FiltersScreen from "../screens/FiltersScreen";
import CategoryMealScreen from "../screens/CategoryMealsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import Colors from "../constants/Colors";

const defaultStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: "white",
  headerTitle: "A dummy title",
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealScreen,
    MealDetail: MealDetailScreen,
  },
  {
    mode: "modal",
    defaultNavigationOptions: defaultStackNavigationOptions,
  }
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    //Default values:
    // headerMode: "screen",
    // initialRouteName: "Categories",
    mode: "modal",
    defaultNavigationOptions: defaultStackNavigationOptions,
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
    screen: FavoritesNavigator,
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

const FiltersStackNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    mode: "modal",
    defaultNavigationOptions: defaultStackNavigationOptions,
  }
);

const MainNavigator = createDrawerNavigator({
  MealsAndFavoritesTabs: TabNavigator,
  Filters: FiltersStackNavigator,
});

export default createAppContainer(MainNavigator);
