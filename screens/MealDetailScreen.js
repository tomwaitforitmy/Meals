import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MealDetailScreen = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Text>MealDetailScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default MealDetailScreen;
