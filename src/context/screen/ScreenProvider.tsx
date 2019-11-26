import React, { useReducer } from 'react';
import { ScreenContext } from './sceenContext';
import { screenReducer, ScreenAction } from './screenReducer';
import ITodo from '../../types/ITodo';

export const ScreenProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(screenReducer, null);

  const changeScreen = (id: ITodo.ID): void => {
    dispatch({ type: ScreenAction.CHANGE_SCREEN, payload: { id } });
  };

  const goBack = (): void => {
    dispatch({ type: ScreenAction.CHANGE_SCREEN, payload: { id: null } });
  };

  return (
    <ScreenContext.Provider value={{
      todoId: state,
      changeScreen,
      goBack,
    }}
    >
      {children}
    </ScreenContext.Provider>
  );
};
