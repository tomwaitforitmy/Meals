import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const FiltersScreen = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Text>FiltersScreen</Text>
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
  container: {},
});

export default FiltersScreen;
