import React from 'react';
import {StyleSheet,View, Button} from 'react-native'



export const MainScreen = ({navigation}) => {
  return (
    <View style={{marginTop: 30,height:'100%'}}>
      <View style={{flex:2}} />
<View style={{flex:1}} >
      <Button
      color="#8B0000"
      title="공격"
      height= "2rem"
      onPress={() => navigation.navigate("Attack")}
      /></View>

      <View style={{flex:3}} >
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