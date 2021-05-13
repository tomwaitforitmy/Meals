import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FavoritesScreen = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Text>Dummy favorites</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default FavoritesScreen;
