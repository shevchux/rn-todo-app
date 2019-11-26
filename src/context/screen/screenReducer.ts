import { MapActionsInterfacesToActions } from '../../utils/types';
import ITodo from '../../types/ITodo';
import { ScreenState } from './screenState';

export enum ScreenAction {
  CHANGE_SCREEN = 'ADD_TODO',
}

export interface ScreenActionsInterfaces {
  [ScreenAction.CHANGE_SCREEN]: { id: null | ITodo.ID };
}

export const screenReducer = (
  state: ScreenState, action: MapActionsInterfacesToActions<ScreenActionsInterfaces>,
): ScreenState => {
  switch (action.type) {
    case ScreenAction.CHANGE_SCREEN:
      return action.payload.id;

    default:
      return state;
  }
};
