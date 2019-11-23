import React, { useState } from 'react';
import {
  View, TextInput, Button, StyleSheet, Alert,
} from 'react-native';
import { THEME } from '../theme';

interface AddTodoProps {
  onSubmit(title: string): void;
}

export const AddTodo: React.FC<AddTodoProps> = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const onAddHandler = (): void => {
    const trimmedValue = value.trim();
    if (trimmedValue) {
      onSubmit(trimmedValue);
      setValue('');
    } else {
      Alert.alert('Введите название', 'Название задачи не может быть пустым');
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button title="Добавить" onPress={onAddHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
  },
});
