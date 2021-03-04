import {combineReducers} from '@reduxjs/toolkit';
import {authReducer} from './authReducer';
import {dataReducer} from './dataReducer';

export default combineReducers({
  auth: authReducer,
  data: dataReducer,
});
