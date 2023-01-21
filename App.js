
import React,{ useState } from 'react';
import { MainScreen } from './navigation/MainScreen';
import { GuardScreen } from './navigation/GuardScreen'; 
import { AttackScreen } from './navigation/AttackScreen';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet,View,Text, TouchableOpacity, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();


export default function App() {
  const [attack,setAttack] = useState(true);
  const guard = () => setAttack(false);
  const attacked = () => setAttack(true);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={attacked}><Text style={{...styles.btnText, color: attack ? "white" : theme.grey}}>공격</Text></TouchableOpacity>
        <TouchableOpacity onPress={guard}><Text style={{...styles.btnText, color: !attack ? "white" : theme.grey}}>수비</Text></TouchableOpacity>
      </View>

        <TextInput
        keyboardType="number-pad"
        multiline
        placeholder={attack ? "숫자를 입력하세요" : "숫자를 입력하세요"}
        style={styles.input}/>

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
    </View>

  );

};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent:"space-between",
    flexDirection:"row",
    marginTop:100,
  },
  btnText: {
    fontSize: 38,
    fontWeight: "600",

  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
    fontSize: 18,
  }
})
