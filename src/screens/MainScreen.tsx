import React from 'react';
import { View, FlatList } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';
import ITodo from '../types/ITodo';

interface MainScreenProps {
  todos: ITodo.Item[];
  addTodo(title: string): void;
  openTodo(id: ITodo.ID): void;
  removeTodo(id: ITodo.ID): void;
}

export const MainScreen: React.FC<MainScreenProps> = ({
  todos, addTodo, openTodo, removeTodo,
}) => (
  <View>
    <AddTodo onSubmit={addTodo} />
    <FlatList
      data={todos}
      renderItem={({ item }) => <Todo todo={item} onOpen={openTodo} onRemove={removeTodo} />}
      keyExtractor={(item) => item.id}
    />
  </View>
);
