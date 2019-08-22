export const GET_HOME = 'GET_HOME';

export const getHome = user => {
  return { type: GET_HOME, payload: user };
};
