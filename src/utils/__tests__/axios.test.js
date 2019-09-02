import { Axios } from '../axios';

process.env.REACT_APP_API_HOST = 'http://example.com';

describe('Axios Header Function', () => {
  it('should render without crashing', () => {
    expect(Axios().defaults.baseURL).toEqual('http://example.com');
    expect(Axios().defaults.headers['Content-Type']).toEqual('application/json');
  });
});
