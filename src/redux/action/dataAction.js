import axios from 'axios';
import {api_url} from '../../helpers';
import {DATA_FAILED, DATA_START, DATA_SUCCESS} from '../type';

export const fetchDataAction = () => {
  return async (dispatch) => {
    try {
      dispatch({type: DATA_START});
      const response = await axios.get(`${api_url}`);
      dispatch({type: DATA_SUCCESS, payload: response.data});
    } catch (err) {
      dispatch({type: DATA_FAILED, payload: err.message});
    }
  };
};
