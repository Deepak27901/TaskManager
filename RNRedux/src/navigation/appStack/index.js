import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/home'
import Main from '../../screens/main'

const Stack = createStackNavigator();
const AppStack = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    )
}

export default AppStack

