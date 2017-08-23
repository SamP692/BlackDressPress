// @flow
import { UiComponent, UpdateComponents } from './uiComponents.types';

export const UPDATE_COMPONENTS: UpdateComponents = (payload: UiComponent[]) => (
  { type: 'UPDATE_COMPONENTS', payload }
);
