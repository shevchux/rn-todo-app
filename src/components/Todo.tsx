import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import ITodo from '../types/ITodo';

interface TodoProps {
  todo: ITodo.Item;
  onOpen(id: ITodo.ID): void;
  onRemove(id: ITodo.ID): void;
}

export const Todo: React.FC<TodoProps> = ({ todo, onOpen, onRemove }) => (
  <TouchableOpacity
    onPress={() => onOpen(todo.id)}
    onLongPress={() => onRemove(todo.id)}
  >
    <View style={styles.todo}>
      <Text>{todo.title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
  },
});
