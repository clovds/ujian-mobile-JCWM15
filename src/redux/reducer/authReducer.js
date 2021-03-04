import {AUTH_START, AUTH_SUCCESS, AUTH_FAILED, AUTH_LOGOUT} from '../type';

const INITIAL_STATE = {
  isSignedIn: false,
  loading: false,
  username: '',
  error: '',
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        isSignedIn: true,
        username: action.payload,
      };
    case AUTH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case AUTH_LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
