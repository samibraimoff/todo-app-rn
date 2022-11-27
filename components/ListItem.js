import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export const ListItem = ({ el, onDeleteTodo }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onDeleteTodo(el.id)}
    >
      <Text style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  text: {
    padding: 20,
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "whitesmoke",
    borderWidth: 1,
    marginVertical: 10,
    fontSize: 18,
    textTransform: "capitalize",
  },
});
