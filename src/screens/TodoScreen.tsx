import React, { useState } from 'react';
import {
  StyleSheet, View, Text, Button,
} from 'react-native';
import { THEME } from '../theme';
import { AppCard } from '../ui/AppCard';
import { EditModal } from '../components/EditModal';
import ITodo from '../types/ITodo';

interface TodoScreenProps {
  todo: ITodo.Item;
  goBack(): void;
  removeTodo(id: ITodo.ID): void;
  updateTodo(id: ITodo.ID, title: string): void;
}

export const TodoScreen: React.FC<TodoScreenProps> = ({
  todo, goBack, removeTodo, updateTodo,
}) => {
  const [modal, setModal] = useState(false);

  const showModal = (): void => setModal(true);
  const hideModal = (): void => setModal(false);

  const onSaveHandler = (title: string): void => {
    updateTodo(todo.id, title);
    hideModal();
  };

  return (
    <View>
      <EditModal value={todo.title} visible={modal} onCancel={hideModal} onSave={onSaveHandler} />
      <AppCard style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <Button title="Ред." onPress={showModal} />
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Назад" onPress={goBack} color={THEME.GRAY_COLOR} />
        </View>
        <View style={styles.button}>
          <Button title="Удалить" color={THEME.DANGER_COLOR} onPress={() => removeTodo(todo.id)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '40%',
  },
  title: {
    fontSize: 20,
  },
  card: {
    marginBottom: 20,
  },
});
