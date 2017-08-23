// @flow
import { defaultUiComponents } from './defaults';

export default (state = defaultUiComponents, action) => {
  switch (action.type) {
    case 'UPDATE_COMPONENTS':
      return { ...state, ...action.playload };
    default:
      return state;
  }
};
