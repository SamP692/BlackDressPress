export type UiComponent = {
  template: number;
  header: string;
  image: string;
  color: string;
  text: string;
}

export type UiComponentList = Array<UiComponent>

export type UpdateComponents = {
  type: 'UPDATE_COMPONENTS';
  payload: UiComponent[];
}
