import React, { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { THEME } from '../theme';
import { AppCard } from '../ui/AppCard';
import { EditModal } from '../components/EditModal';
import { AppText } from '../ui/AppTodo';
import { AppButton } from '../ui/AppButton';
import { useScreen } from '../context/screen/sceenContext';
import { useTodo } from '../context/todo/todoContext';

export const TodoScreen: React.FC = () => {
  const { goBack, todoId } = useScreen();
  const { removeTodo, updateTodo, getTodoById } = useTodo();
  const [modal, setModal] = useState(false);
  const todo = getTodoById(todoId);

  const showModal = (): void => setModal(true);
  const hideModal = (): void => setModal(false);

  const onSaveHandler = (title: string): void => {
    updateTodo(todo.id, title);
    hideModal();
  };

  return (
    <View>
      <EditModal
        value={todo.title}
        visible={modal}
        onCancel={hideModal}
        onSave={onSaveHandler}
      />
      <AppCard style={styles.card}>
        <AppText style={styles.title}>{todo.title}</AppText>
        <AppButton onPress={showModal}>
          <FontAwesome name="edit" size={20} />
        </AppButton>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton onPress={goBack} color={THEME.GRAY_COLOR}>
            <AntDesign name="back" size={20} color="#fff" />
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton
            color={THEME.DANGER_COLOR}
            onPress={() => removeTodo(todo.id)}
          >
            <FontAwesome name="remove" size={20} color="#fff" />
          </AppButton>
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
    width: Dimensions.get('window').width / 3,
  },
  title: {
    fontSize: 20,
  },
  card: {
    marginBottom: 20,
  },
});
