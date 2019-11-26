import React, { useState, useEffect } from 'react';
import {
  View, FlatList, Image, StyleSheet, Dimensions,
} from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';
import noItemImage from '../../assets/no-items.png';
import { THEME } from '../theme';
import { useTodo } from '../context/todo/todoContext';
import { useScreen } from '../context/screen/sceenContext';

export const MainScreen: React.FC = () => {
  const [width, setWidth] = useState(Dimensions.get('window').width - 2 * THEME.HORISONTAL_PADDING);
  const { todos, removeTodo, addTodo } = useTodo();
  const { changeScreen } = useScreen();

  useEffect(() => {
    const update = (): void => {
      setWidth(Dimensions.get('window').width - 2 * THEME.HORISONTAL_PADDING);
    };
    Dimensions.addEventListener('change', update);

    return Dimensions.removeEventListener.bind(null, 'change', update);
  });

  return (
    <View style={{ width }}>
      <AddTodo onSubmit={addTodo} />
      <FlatList
        data={todos}
        renderItem={({ item }) => <Todo todo={item} onOpen={changeScreen} onRemove={removeTodo} />}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={(
          <View style={styles.imgWrap}>
            <Image style={styles.image} source={noItemImage} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imgWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
