
import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from './navigation/MainScreen';
import { GuardScreen } from './navigation/GuardScreen'; 
import { AttackScreen } from './navigation/AttackScreen';


const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Atteck" component={AttackScreen} />
        <Stack.Screen name="Guard" component={GuardScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );

};

