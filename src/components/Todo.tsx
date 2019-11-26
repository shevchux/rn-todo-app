import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import ITodo from '../types/ITodo';
import { AppText } from '../ui/AppTodo';
import { TouchableWrapper } from '../ui/TouchableWrapper';

interface TodoProps {
  todo: ITodo.Item;
  onOpen(id: ITodo.ID): void;
  onRemove(id: ITodo.ID): void;
}

export const Todo: React.FC<TodoProps> = ({ todo, onOpen, onRemove }) => (
  <TouchableWrapper
    onPress={() => onOpen(todo.id)}
    onLongPress={() => onRemove(todo.id)}
  >
    <View style={styles.todo}>
      <AppText fontStyle="bold">{todo.title}</AppText>
    </View>
  </TouchableWrapper>
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
