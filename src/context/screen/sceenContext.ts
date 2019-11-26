import { createContext, useContext } from 'react';
import ITodo from '../../types/ITodo';

interface ScreenContextProps {
  todoId: ITodo.ID;
  changeScreen(id: ITodo.ID): void;
  goBack(): void;
}

export const ScreenContext = createContext<ScreenContextProps>({} as ScreenContextProps);

export const useScreen = (): ScreenContextProps => useContext(ScreenContext);
