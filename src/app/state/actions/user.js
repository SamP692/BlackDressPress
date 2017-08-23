import { UpdateSession, EndSession, UserSession } from './user.types';

export const UPDATE_SESSION: UpdateSession = (payload: UserSession) => (
  { type: 'UPDATE_SESSION', payload }
);

export const END_SESSION: EndSession = () => ({ type: 'END_SESSION' });
