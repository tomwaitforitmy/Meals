import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FavoritesScreen = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Text>FavoritesScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default FavoritesScreen;
