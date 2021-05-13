import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GetTouchableComponentForAnyOS } from "../common_functions/GetTouchableComponentForAnyOS";

const CategoryGridItem = (props) => {
  let MyTouchable = GetTouchableComponentForAnyOS();

  return (
    <View style={styles.gridItem}>
      <MyTouchable style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{
            ...styles.tile,
            ...{ backgroundColor: props.color },
          }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </MyTouchable>
    </View>
  );
};

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    borderRadius: 10,
    //only iOS
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    //end iOS
    elevation: 3, //only android
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
  },
  title: {
    fontFamily: "open-sans",
    fontSize: 22,
    textAlign: "right",
  },
});

export default CategoryGridItem;
