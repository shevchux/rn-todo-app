import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface AppTextProps {
  style?: TextStyle;
  fontStyle?: 'normal' | 'bold';
}

export const AppText: React.FC<AppTextProps> = ({ style = {}, fontStyle = 'normal', children }) => (
  <Text
    style={{ ...(fontStyle === 'bold' ? styles.defaultBold : styles.default), ...style }}
  >
    {children}
  </Text>
);

const styles = StyleSheet.create({
  default: {
    fontFamily: 'roboto-regular',
  },
  defaultBold: {
    fontFamily: 'roboto-bold',
  },
});
