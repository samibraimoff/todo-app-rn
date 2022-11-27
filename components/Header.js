import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export const Header = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>List of todos.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingTop: 60,
    height: 100,
    backgroundColor: "silver",
  },
  text: {
    fontSize: 18,
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  },
});
