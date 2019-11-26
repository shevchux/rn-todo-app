import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppText } from './AppTodo';
import { THEME } from '../theme';
import { TouchableWrapper } from './TouchableWrapper';

interface AppButtonProps {
  color?: string;
  onPress(): void;
}

export const AppButton: React.FC<AppButtonProps> = ({ children, onPress, color = THEME.MAIN_COLOR }) => (
  <TouchableWrapper onPress={onPress}>
    <View style={{ ...styles.button, backgroundColor: color }}>
      <AppText fontStyle="bold" style={styles.text}>{children}</AppText>
    </View>
  </TouchableWrapper>
);

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
