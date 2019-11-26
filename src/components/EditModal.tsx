import React, { useState, useEffect } from 'react';
import {
  Modal, View, TextInput, StyleSheet, Alert,
} from 'react-native';
import { SimpleLineIcons, MaterialIcons } from '@expo/vector-icons';
import { THEME } from '../theme';
import { AppButton } from '../ui/AppButton';

interface EditModalProps {
  value: string;
  visible: boolean;
  onCancel(): void;
  onSave(value: string): void;
}

export const EditModal: React.FC<EditModalProps> = ({
  value, visible, onCancel, onSave,
}) => {
  const [title, setTitle] = useState(value);

  useEffect(() => {
    if (visible) {
      setTitle(value);
    }
  }, [visible]);

  const onSaveHandler = (): void => {
    const trimmedTitle = title.trim();
    if (trimmedTitle) {
      onSave(trimmedTitle);
    } else {
      Alert.alert('Введите название', 'Название задачи не может быть пустым');
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Название задачи"
          autoCapitalize="none"
        />
        <View style={styles.buttons}>
          <AppButton onPress={onCancel} color={THEME.DANGER_COLOR}>
            <MaterialIcons name="arrow-back" size={20} />
          </AppButton>
          <AppButton onPress={onSaveHandler}>
            <SimpleLineIcons name="check" size={20} />
          </AppButton>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    padding: 10,
    width: '80%',
  },
  buttons: {
    width: '100%',
    marginTop: 10,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});
