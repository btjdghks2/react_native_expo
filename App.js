
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Page1 = () => {
  return (
    <View style={{flex:1, backgroundColor:"lightgreen"}}>
      <Text style={{fontSize:25}}>Page1</Text>
    </View>
  )
}

const Page2 = () => {
  return (
    <View style={{flex:1, backgroundColor:"gold"}}>
      <Text style={{fontSize:25}}>Page2</Text>
    </View>
  )
}

const Page3= () => {
  return (
    <View style={{flex:1, backgroundColor:"steelblue"}}>
      <Text style={{fontSize:25}}>Page2</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator(); // Stack Navigation함수를 Stack변수명으로 저장


export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="P1" component={Page1} options={{
        title: 'My home', //title
        headerTitleAlign:'center', //header 위치
        headerStyle:{backgroundColor: 'crimson',}, //header 배경색
        headerTintColor: '#fff', //header title 색상
        headerTitleStyle: {fontWeight: 'bold',},  //header 굵기
      }}/>
      <Stack.Screen name="P2" component={Page2} />
      <Stack.Screen name="P3" component={Page3} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}


