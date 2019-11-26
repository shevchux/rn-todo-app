import ITodo from '../../types/ITodo';

export interface TodoState {
  todos: ITodo.Item[];
}

export const initialState: TodoState = {
  todos: [{ id: '1', title: 'Выучить RN' }],
};
