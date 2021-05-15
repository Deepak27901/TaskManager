import React from 'react';
import {View, Text} from 'react-native';
import AppStack from './appStack';
import AuthStack from './authStack';
import {NavigationContainer} from '@react-navigation/native';
const Routes = () => {
  const IsUser = true;
  return (
    <NavigationContainer>
  
      {IsUser ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;

