import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import DefaultText from "../components/DefaultText";
import FilterSwitch from "../components/FilterSwitch";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const FiltersScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <DefaultText style={styles.title}>Available filters</DefaultText>
      <FilterSwitch
        label={"Gluten-free"}
        state={isGlutenFree}
        onValueChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label={"Vegetarian"}
        state={isVegetarian}
        onValueChange={(newValue) => setIsVegetarian(newValue)}
      />
      <FilterSwitch
        label={"Vegan"}
        state={isVegan}
        onValueChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label={"Lactose-free"}
        state={isLactoseFree}
        onValueChange={(newValue) => setIsLactoseFree(newValue)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = (props) => {
  return {
    headerTitle: "Filters",
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
  title: {
    fontSize: 22,
    fontFamily: "open-sans-bold",
    margin: 20,
    textAlign: "center",
  },
});

export default FiltersScreen;
