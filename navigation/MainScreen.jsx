import React from 'react';
import {StyleSheet,View, Button} from 'react-native'



export const MainScreen = ({navigation}) => {
  return (
    <View >
      <View  />
<View style={{width:'30', height:'40',margin:10}} >
      <Button
      color="#8B0000"
      title="공격"
      height= "2rem"
      onPress={() => navigation.navigate("Attack")}
      /></View>

      <View style={{width:'30', height:'60',margin:10}} >
      <Button 
      color="#DAA520"
      title="수비"

      onPress={() => navigation.navigate("Guard")}

      /></View>
    </View>


  )
}

const styles = StyleSheet.create({

 container: {
  flexDirection: 'column',
  justifyContent: 'center',
  marginVertical: '80%',
 },
seoarator: {
  marginVertical: 8,
  borderBottomColor: '$737373',
  borderBottomWidth: StyleSheet.hairlineWidth,
}

})