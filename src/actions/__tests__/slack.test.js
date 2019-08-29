import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { getSlackToken } from '../slack';

const mockStore = configureMockStore([thunk]);
const slackResSuccess = {
  ok: true,
  access_token: 'sample token',
  scope: 'sample scope',
  user_id: 'JNFENKAF',
  team_name: 'Sample Team',
  team_id: 'KNINNFAN8',
  enterprise_id: null,
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

  it('Should return FETCH_SUCCESS Action with payload', () => {
    const api = process.env.REACT_APP_API_HOST;
    nock('https://slack.com/api')
      .post('/oauth.access')
      .reply(200, slackResSuccess);
    const expectedActions = [
      {
        type: 'FETCH_START',
      },
      {
        type: 'FETCH_SUCCESS',
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
    return store.dispatch(getSlackToken()).then(() => {
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
    return store.dispatch(getSlackToken()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
