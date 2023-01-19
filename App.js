
import React from 'react';
import { MainScreen } from './navigation/MainScreen';
import { GuardScreen } from './navigation/GuardScreen'; 
import { AttackScreen } from './navigation/AttackScreen';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen 
        name="Main" 
        component={MainScreen}
        options={{title: '홈',
      headerStyle: {
        backgroundColor: '#4682B4',
      },
      headerTintColor:'#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
      },
      }}
        
        />
        <Stack.Screen name="Attack" component={AttackScreen}/>
        <Stack.Screen name="Guard" component={GuardScreen}/>
      </Stack.Navigator>
    </NavigationContainer>


  );

};

