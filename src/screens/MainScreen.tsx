import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';
import ITodo from '../types/ITodo';
import noItemImage from '../../assets/no-items.png';

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
      ListEmptyComponent={(
        <View style={styles.imgWrap}>
          <Image style={styles.image} source={noItemImage} />
        </View>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  imgWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
