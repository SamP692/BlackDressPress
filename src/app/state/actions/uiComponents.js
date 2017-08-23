// @flow
import { UiComponentList, UpdateComponents } from './uiComponents.types';

export const UPDATE_COMPONENTS: UpdateComponents = (payload: UiComponentList) => (
  { type: 'UPDATE_COMPONENTS', payload }
);
