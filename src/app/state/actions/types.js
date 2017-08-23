export type UserSession = {
  userName: string;
  userId: number;
}

export type UpdateSession = {
  type: 'UPDATE_SESSION';
  payload: UserSession;
}

export type EndSession = {
  type: 'END_SESSION';
}
