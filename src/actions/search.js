import Fuse from 'fuse.js';
export const TEAM_SEARCHING = 'TEAM_SEARCHING';
export const TEAM_SEARCH_SUCCESS = 'TEAM_SEARCH_SUCCESS';
export const TEAM_SEARCH_ERROR = 'TEAM_SEARCH_ERROR';

export const searchTeam = (searchItem, searchList) => dispatch => {
  dispatch({ type: TEAM_SEARCHING });
  const options = {
    keys: [
      {
        name: 'email',
        weight: '0.3',
      },
      {
        name: 'name',
        weight: '0.7',
      },
    ],
  };

  if (searchItem === null) {
    console.log('null');
    console.log(searchList);
    dispatch({ type: TEAM_SEARCH_SUCCESS, payload: searchList });
  } else {
    const fuse = new Fuse(searchList, options);
    const searchedItems = fuse.search(searchItem);
    console.log('search....');
    if (searchedItems.length === 0) {
      console.log('searching is empty');
      dispatch({ type: TEAM_SEARCH_ERROR, message: 'resource not found' });
    } else {
      console.log('searching is not empty');
      dispatch({ type: TEAM_SEARCH_SUCCESS, payload: searchedItems });
    }
  }
};
