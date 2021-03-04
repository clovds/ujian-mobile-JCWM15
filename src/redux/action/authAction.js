import AsyncStorage from '@react-native-async-storage/async-storage';
import {AUTH_FAILED, AUTH_LOGOUT, AUTH_START, AUTH_SUCCESS} from '../type';
import {fetchDataAction} from './dataAction';

export const loginAction = (username) => {
  return async (dispatch) => {
    try {
      dispatch({type: AUTH_START});
      AsyncStorage.setItem('username', username);
      dispatch({type: AUTH_SUCCESS, payload: username});
      dispatch(fetchDataAction());
    } catch (err) {
      dispatch({type: AUTH_FAILED, payload: err.message});
    }
  };
};

export const logoutAction = () => {
  return async (dispatch) => {
    try {
      await AsyncStorage.removeItem('username');
      dispatch({type: AUTH_LOGOUT});
    } catch (err) {
      dispatch({type: AUTH_FAILED, payload: err.message});
    }
  };
};

export const keepLoginAction = () => {
  return async (dispatch) => {
    try {
      const username = await AsyncStorage.getItem('username');
      dispatch({type: AUTH_START});
      if (username) {
        dispatch({type: AUTH_SUCCESS, payload: username});
        dispatch(fetchDataAction());
      }
    } catch (err) {
      dispatch({type: AUTH_FAILED, payload: err.message});
    }
  };
};
