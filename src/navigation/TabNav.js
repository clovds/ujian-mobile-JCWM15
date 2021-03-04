import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/home/HomeScreen';
import LiveUpdateScreen from '../screen/home/LiveUpdateScreen';
import {Icon} from 'react-native-elements';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          let iconColor;
          if (route.name === 'Feed') {
            iconName = 'home';
          } else if (route.name === 'LiveUpdate') {
            iconName = 'view-list';
          }
          if (route.name === 'Feed') {
            iconColor = focused ? 'orange' : 'grey';
          } else if (route.name === 'LiveUpdate') {
            iconColor = focused ? 'orange' : 'grey';
          }
          return <Icon name={iconName} type="material" color={iconColor} />;
        },
        tabBarLabel: () => {
          return null;
        },
      })}>
      <Tab.Screen name="Feed" component={HomeScreen} />
      <Tab.Screen name="LiveUpdate" component={LiveUpdateScreen} />
    </Tab.Navigator>
  );
};

export default TabNav;
