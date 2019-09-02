import { loggedIn } from '../auth';

describe('Auth Action Creator', () => {
  it('Should return SET_USER Action with error message', () => {
    const user = {
      name: 'Example Tumble',
      avatar: 'https://secure.gravatar.com/avatar/0016-512.png',
    };
    const expectedAction = {
      type: 'SET_USER',
      payload: {
        name: 'Example Tumble',
        avatar: 'https://secure.gravatar.com/avatar/0016-512.png',
      },
    };
    const action = loggedIn(user);
    expect(action).toEqual(expectedAction);
  });
});
