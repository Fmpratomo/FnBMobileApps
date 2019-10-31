import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const HeaderCard = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
      <TouchableOpacity onPress={props.onSelect}>
        <Text style={styles.headerLink}>SEE ALL ></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  headerText: {
    fontSize: 26,
    fontWeight: "bold"
  },
  headerLink: {
    fontSize: 18,
    color: "blue",
    fontWeight: "bold"
  }
});

export default HeaderCard;
