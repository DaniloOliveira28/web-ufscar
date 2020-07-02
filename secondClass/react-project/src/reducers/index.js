import { combineReducers } from  'redux';

import { GET_PROPERTIES, LOGIN, LOGOUT } from '../actions';

function properties(state = {}, action) {
  switch (action.type) {
    case GET_PROPERTIES:
      return {
        ...action.value.val()
      }
    default:
      return state;
  }
}

function info(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.user
      }
    case LOGOUT:
      return {}
    default:
      return state;
  }
}

export default combineReducers({
  properties,
  info
});
