import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";

export const Form = ({ newTodo, setNewTodo, onAddNewTodo }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Create new todo.."
        style={styles.input}
        value={newTodo}
        onChangeText={(text) => setNewTodo(text)}
      />
      <TouchableOpacity style={styles.button}>
        <Button title="Add" onPress={onAddNewTodo} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: "row",
  },
  input: {
    fontSize: 18,
    padding: 10,
    borderWidth: 1,
    flex: 5,
    marginRight: 10,
    borderRadius: 5,
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "red",
    backgroundColor: "green",
  },
});
