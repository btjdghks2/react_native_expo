import { ScreenStackHeaderLeftView } from "react-native-screens";

export default function StackNavigator(){
  return (
    <Stack.Navigator
    screenOptions={{/**/}}>
        <Stack.Screen
        name='main'
        component={BottonTabNavigation}
        options={{
            title:'장바구니',
            
        }}/>
        <Stack.Screen
        name= 'productDetail'
        component={ProductDetail}
        options={{
            title:'제품상세',
            headerShown: false,
        }}/>
    </Stack.Navigator>
  )
}
