import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { THEME } from '../theme';
import ITodo from '../types/ITodo';

interface NavbarProps {
  title: ITodo.ID;
}

export const Navbar: React.FC<NavbarProps> = ({ title }) => (
  <View style={styles.navbar}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  navbar: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
    backgroundColor: THEME.MAIN_COLOR,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
