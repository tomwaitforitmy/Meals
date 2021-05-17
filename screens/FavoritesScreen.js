import React from "react";
import { useSelector } from "react-redux";
import Colors from "../constants/Colors";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { StyleSheet, View } from "react-native";
import DefaultText from "../components/DefaultText";

const FavoritesScreen = (props) => {
  const favorites = useSelector((state) => state.meals.favoriteMeals);

  if (favorites.length === 0 || !favorites) {
    return (
      <View style={styles.dummyContent}>
        <DefaultText>No favorite meals found. Start adding some!</DefaultText>
      </View>
    );
  }

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

const styles = StyleSheet.create({
  dummyContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
