import React from "react";
import { StyleSheet, Switch, View } from "react-native";
import Colors from "../constants/Colors";
import DefaultText from "./DefaultText";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <DefaultText>{props.label}</DefaultText>
      <Switch
        trackColor={{ true: Colors.primary }}
        thumbColor={Colors.second}
        value={props.state}
        onValueChange={props.onValueChange}
      ></Switch>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    margin: 15,
  },
});

export default FilterSwitch;
