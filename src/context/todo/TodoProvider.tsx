import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';
import { todoReducer, TodoAction } from './todoReducer';
import ITodo from '../../types/ITodo';
import { ScreenContext } from '../screen/sceenContext';
import { initialState } from './todoState';
import { TodoContext } from './todoContext';

export const TodoProvider: React.FC = ({ children }) => {
  const { goBack } = useContext(ScreenContext);
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (title: string): void => {
    dispatch({ type: TodoAction.ADD_TODO, payload: { title } });
  };

  const removeTodo = (id: ITodo.ID): void => {
    const todo = getTodoById(id);

    Alert.alert(
      'Удаление элемента',
      `Вы уверены, что хотите удалить задачу "${todo.title}"?`,
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          onPress: () => {
            goBack();
            dispatch({ type: TodoAction.REMOVE_TODO, payload: { id } });
          },
        },
      ],
      {
        cancelable: false,
      },
    );
  };

  const updateTodo = (id: ITodo.ID, title: string): void => {
    dispatch({ type: TodoAction.UPDATE_TODO, payload: { id, title } });
  };

  const getTodoById = (id: ITodo.ID): ITodo.Item => (
    state.todos.find((todo) => todo.id === id)
  );

  return (
    <TodoContext.Provider value={{
      todos: state.todos,
      addTodo,
      removeTodo,
      updateTodo,
      getTodoById,
    }}
    >
      {children}
    </TodoContext.Provider>
  );
};
