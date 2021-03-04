import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch, useSelector} from 'react-redux';
import {keepLoginAction} from '../redux/action';
import LoginScreen from '../screen/auth/LoginScreen';
import DrawerNav from './DrawerNav';

const Main = () => {
  const {isSignedIn} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const keepLogin = async () => {
      await dispatch(keepLoginAction());
      SplashScreen.hide();
    };
    keepLogin();
  }, [dispatch]);

  return <>{isSignedIn ? <DrawerNav /> : <LoginScreen />}</>;
};

export default Main;
