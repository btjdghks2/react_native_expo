import { StatusBar } from 'expo-status-bar';
import StackNavigator from './navigation/StackNavigator.jsx';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-native-stack';



export default function App() {

  const AppNavigator = createStackNavigator(
    {
      Home: HomeScreen,
      Details: DetailsScreen,
    },
    {
      initialRouteName: 'Home',
    }
  );
  return (

    <View style={StyleSheet.container}>
      <Text> start</Text>
      <StatusBar style="auto" />
    </View>
  );
}


