import {DATA_START, DATA_SUCCESS, DATA_FAILED} from '../type';
import moment from 'moment';

const INITIAL_STATE = {
  global: {},
  countries: [],
  date: '',
  loading: false,
  error: '',
};

export const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_START:
      return {
        ...state,
        loading: true,
      };
    case DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        global: action.payload.Global,
        countries: action.payload.Countries,
        date: moment().calendar(),
      };
    case DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
