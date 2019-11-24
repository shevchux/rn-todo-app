import React, { useState } from 'react';

import { StyleSheet, View, Alert } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';
import ITodo from './src/types/ITodo';
import RobotoReqular from './assets/fonts/Roboto-Regular.ttf';
import RobotoBold from './assets/fonts/Roboto-Bold.ttf';

function loadApplication(): Promise<void> {
  return Font.loadAsync({
    'roboto-regular': RobotoReqular,
    'roboto-bold': RobotoBold,
  });
}

export default function App(): JSX.Element {
  const [isReady, setReady] = useState(false);
  const [todoId, setTodoId] = useState<ITodo.ID>(null);
  const [todos, setTodos] = useState<ITodo.Item[]>([]);

  if (!isReady) {
    return <AppLoading startAsync={loadApplication} onFinish={() => setReady(true)} />;
  }

  const getTodoById = (id: ITodo.ID): ITodo.Item => todos.find((todo) => todo.id === id);

  const addTodo = (title: string): ITodo.ID => {
    const id = Date.now().toString();
    setTodos((prevTodos) => prevTodos.concat({ id, title }));

    return id;
  };

  const updateTodo = (id: ITodo.ID, title: string): void => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id !== id ? todo : { ...todo, title })));
  };

  const removeTodo = (id: ITodo.ID): void => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
  };

  const removeTodoWithConfirm = (id: ITodo.ID): void => {
    const todo = getTodoById(id);

    Alert.alert(
      'Удаление элемента',
      `Вы уверены, что хотите удалить задачу "${todo.title}"?`,
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          onPress: () => {
            setTodoId(null);
            removeTodo(id);
          },
        },
      ],
      {
        cancelable: false,
      },
    );
  };

  return (
    <View style={styles.root}>
      <Navbar title="Todo App!!" />
      <View style={styles.container}>
        {todoId ? (
          <TodoScreen
            todo={getTodoById(todoId)}
            goBack={() => setTodoId(null)}
            removeTodo={removeTodoWithConfirm}
            updateTodo={updateTodo}
          />
        ) : (
          <MainScreen todos={todos} addTodo={addTodo} openTodo={setTodoId} removeTodo={removeTodoWithConfirm} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
