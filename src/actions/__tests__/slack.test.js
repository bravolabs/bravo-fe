import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { appInstall, signInWithSlack } from '../slack';

const mockStore = configureMockStore([thunk]);
const slackResSuccess = {
  ok: true,
  access_token: 'sample token',
  scope: 'sample scope',
  user_id: 'JNFENKAF',
  team_name: 'Sample Team',
  team_id: 'KNINNFAN8',
  enterprise_id: null,
  user: { id: 'JVDJCDEDN' },
  incoming_webhook: {
    channel: '#general',
    channel_id: 'CMK9N836H',
    configuration_url: 'https://sample-workspace.slack.com/services/KNINNFAN8',
    url: 'https://hooks.slack.com/services/JNFENKAF/KNINNFAN8/Fsfnknkfhiw4wq6j2efknaQn0QH',
  },
};

const slackResError = {
  ok: false,
  error: 'code_already_used',
};

describe('Slack Action Creator', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });
  afterEach(() => {
    nock.cleanAll();
  });

  describe('Slack App Install', () => {
    it('Should return INSTALL_SUCCESS Action with payload', () => {
      const api = process.env.REACT_APP_API_HOST;
      nock('https://slack.com/api')
        .post('/oauth.access')
        .reply(200, slackResSuccess);
      const expectedActions = [
        {
          type: 'FETCH_START',
        },
        {
          type: 'INSTALL_SUCCESS',
          payload: {
            avatar: 'https://secure.gravatar.com/avatar/user-avatar.png',
            name: 'Example Tumble',
          },
        },
      ];

      nock(api)
        .post('/slack/install')
        .reply(200, {
          avatar: 'https://secure.gravatar.com/avatar/user-avatar.png',
          name: 'Example Tumble',
        });
      store = mockStore({});
      return store.dispatch(appInstall()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('Should return FETCH_ERROR Action with error message', () => {
      nock('https://slack.com/api')
        .post('/oauth.access')
        .reply(200, slackResError);
      const expectedActions = [
        {
          type: 'FETCH_START',
        },
        {
          type: 'FETCH_ERROR',
          payload: 'code_already_used',
        },
      ];

      store = mockStore({});
      return store.dispatch(appInstall()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('SignIn With Slack', () => {
    it('Should return SET_USER Action with payload', () => {
      const api = process.env.REACT_APP_API_HOST;
      nock('https://slack.com/api')
        .post('/oauth.access')
        .reply(200, slackResSuccess);
      const expectedActions = [
        {
          type: 'FETCH_START',
        },
        {
          type: 'SET_USER',
          payload: {
            name: 'Example Tumble',
            avatar: 'https://secure.gravatar.com/avatar/0016-512.png',
          },
        },
      ];
      nock(api)
        .post('/api/auths')
        .reply(200, {
          name: 'Example Tumble',
          avatar: 'https://secure.gravatar.com/avatar/0016-512.png',
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1U',
        });
      store = mockStore({});
      return store.dispatch(signInWithSlack()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('Should return FETCH_ERROR Action with error message', () => {
      nock('https://slack.com/api')
        .post('/oauth.access')
        .reply(200, slackResSuccess);
      const api = process.env.REACT_APP_API_HOST;
      const expectedActions = [
        {
          type: 'FETCH_START',
        },
        {
          type: 'FETCH_ERROR',
          payload: 'Request failed with status code 500',
        },
      ];
      nock(api)
        .post('/api/auths')
        .reply(500);
      store = mockStore({});
      return store.dispatch(signInWithSlack()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
