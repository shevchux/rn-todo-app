import { MapActionsInterfacesToActions } from '../../utils/types';
import { TodoState } from './todoState';
import ITodo from '../../types/ITodo';

export enum TodoAction {
  ADD_TODO = 'ADD_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
  REMOVE_TODO = 'REMOVE_TODO'
}

export interface TodoActionsInterfaces {
  [TodoAction.ADD_TODO]: { title: string };
  [TodoAction.REMOVE_TODO]: { id: ITodo.ID };
  [TodoAction.UPDATE_TODO]: { id: ITodo.ID; title: string };
}

export const todoReducer = (
  state: TodoState, action: MapActionsInterfacesToActions<TodoActionsInterfaces>,
): TodoState => {
  switch (action.type) {
    case TodoAction.ADD_TODO:
      return ({
        ...state,
        todos: [...state.todos, { id: Date.now().toString(), title: action.payload.title }],
      });

    case TodoAction.REMOVE_TODO:
      return ({
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      });

    case TodoAction.UPDATE_TODO: {
      const { id, title } = action.payload;

      return ({
        ...state,
        todos: state.todos.map((todo) => (todo.id === id ? { ...todo, title } : todo)),
      });
    }

    default:
      return state;
  }
};
