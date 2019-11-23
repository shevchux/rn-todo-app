import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';
import ITodo from './src/types/ITodo';

const App: React.FC = () => {
  const [todoId, setTodoId] = useState<ITodo.ID>(null);
  const [todos, setTodos] = useState<ITodo.Item[]>([
    { id: '1', title: 'Выучить React Native' },
    { id: '2', title: 'Написать приложение' },
  ]);

  const getTodoById = (id: ITodo.ID): ITodo.Item => (
    todos.find((todo) => todo.id === id)
  );

  const addTodo = (title: string): void => {
    setTodos((prevTodos) => prevTodos.concat({
      id: Date.now().toString(),
      title,
    }));
  };

  const updateTodo = (id: ITodo.ID, title: string): void => {
    setTodos((prevTodos) => prevTodos.map((todo) => (
      todo.id !== id ? todo : { ...todo, title }
    )));
  };

  const removeTodo = (id: ITodo.ID): void => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
  };

  const removeTodoWithConfirm = (id: ITodo.ID): void => {
    const todo = getTodoById(id);

    Alert.alert('Удаление элемента', `Вы уверены, что хотите удалить задачу "${todo.title}"?`, [
      {
        text: 'Отмена',
        style: 'cancel',
      }, {
        text: 'Удалить',
        onPress: () => {
          setTodoId(null);
          removeTodo(id);
        },
      },
    ], {
      cancelable: false,
    });
  };

  return (
    <View>
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
          <MainScreen
            todos={todos}
            addTodo={addTodo}
            openTodo={setTodoId}
            removeTodo={removeTodo}
          />
        )}
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
