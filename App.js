import { StatusBar } from 'expo-status-bar';
import StackNavigator from './navigation/StackNavigator.jsx';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {
  return (

    <View style={StyleSheet.container}>
      <Text> start</Text>
      <StatusBar style="auto" />
    </View>
  );
}


