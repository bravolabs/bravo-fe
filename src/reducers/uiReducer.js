import { types } from '../actions/ui';

const initialState = {
  sideNavActive: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UI_SIDEMENU_TOGGLE:
      return { ...state, sideNavActive: !state.sideNavActive };
    default:
      return state;
  }
};
