export const SET_USER = 'SET_USER';

export const loggedIn = user => {
  return { type: SET_USER, payload: user };
};
