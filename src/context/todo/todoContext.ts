import { createContext, useContext } from 'react';
import ITodo from '../../types/ITodo';

interface TodoContextProps {
  todos: ITodo.Item[];
  addTodo(title: string): void;
  removeTodo(id: ITodo.ID): void;
  updateTodo(id: ITodo.ID, title: string): void;
  getTodoById(id: ITodo.ID): ITodo.Item;
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);

export const useTodo = (): TodoContextProps => useContext(TodoContext);
