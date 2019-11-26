import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Navbar } from './components/Navbar';
import { TodoScreen } from './screens/TodoScreen';
import { MainScreen } from './screens/MainScreen';
import { THEME } from './theme';
import { useScreen } from './context/screen/sceenContext';

export const MainLayout: React.FC = () => {
  const { todoId } = useScreen();

  return (
    <View style={styles.root}>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        {todoId ? <TodoScreen /> : <MainScreen />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    paddingHorizontal: THEME.HORISONTAL_PADDING,
    paddingVertical: 20,
  },
});
