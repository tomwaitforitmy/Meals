import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const MealDetailScreen = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Text>MealDetailScreen</Text>
      <Button
        title="Categories"
        onPress={() => {
          props.navigation.navigate("Categories");
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default MealDetailScreen;
