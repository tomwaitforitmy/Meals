import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CategoriesScreen = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Text>CategoriesScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CategoriesScreen;
