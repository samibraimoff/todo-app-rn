import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import { Header } from "./components/Header";
import { ListItem } from "./components/ListItem";
import { Form } from "./components/Form";

export default function App() {
  const initialState = [
    {
      id: 1,
      text: "buy milk",
    },
    {
      id: 2,
      text: "do homework",
    },
    {
      id: 3,
      text: "sell car",
    },
    {
      id: 4,
      text: "watch movie",
    },
  ];

  const [todos, setTodos] = React.useState(initialState);
  const [newTodo, setNewTodo] = React.useState();

  const addNewTodoHandler = () => {
    if (!newTodo) {
      return Alert.alert("Error", "Please enter your todo..");
    }
    const newTodoItem = {
      id: Math.random(),
      text: newTodo,
    };
    setTodos([newTodoItem, ...todos]);
    setNewTodo("");
  };

  const deleteTodoItem = (id) => {
    const newList = todos.filter((todo) => todo.id !== id);
    setTodos(newList);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Form
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        onAddNewTodo={addNewTodoHandler}
      />
      <View>
        {todos.length === 0 && <Text>There are no todos.</Text>}
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <ListItem key={item.id} el={item} onDeleteTodo={deleteTodoItem} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    justifyContent: "center",
  },
});
