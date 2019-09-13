import { axiosWithAuth } from '../utils/axios';

export const types = {
  SET_COMMENTS: 'SET_COMMENTS',
  FETCHING_COMMENTS: 'FETCHING_COMMENTS',
  COMMENTS_ERROR: 'COMMENTS_ERROR',
};

export const getComments = id => async dispatch => {
  dispatch({ type: types.FETCHING_COMMENTS });
  try {
    const { data } = await axiosWithAuth().get(`/api/shoutouts/${id}/replies`);

    dispatch({ type: types.SET_COMMENTS, payload: data.data || data });
  } catch (error) {
    if (error.response) {
      dispatch({ type: types.COMMENTS_ERROR, payload: error.response.data.message });
      return;
    }
    dispatch({ type: types.COMMENTS_ERROR, payload: error.message });
  }
};
