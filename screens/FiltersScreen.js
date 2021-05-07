import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FiltersScreen = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Text>FiltersScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default FiltersScreen;
