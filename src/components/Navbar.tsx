import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { THEME } from '../theme';
import ITodo from '../types/ITodo';
import { AppText } from '../ui/AppTodo';

interface NavbarProps {
  title: ITodo.ID;
}

export const Navbar: React.FC<NavbarProps> = ({ title }) => (
  <View style={{
    ...styles.navbar,
    ...Platform.select({
      android: styles.navbarAndroid,
      ios: styles.navbarIOS,
    }),
  }}
  >
    <AppText style={styles.text} fontStyle="bold">{title}</AppText>
  </View>
);

const styles = StyleSheet.create({
  navbar: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  navbarIOS: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: THEME.MAIN_COLOR,
  },
  navbarAndroid: {
    backgroundColor: THEME.MAIN_COLOR,
  },
  text: {
    color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : 'white',
    fontSize: 20,
  },
});
