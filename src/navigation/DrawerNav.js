import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNav from './TabNav';
import LogoutScreen from '../screen/auth/LogoutScreen';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNav} />
      <Drawer.Screen name="Account" component={LogoutScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
