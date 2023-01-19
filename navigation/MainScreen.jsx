import React from 'react';
import {View, Button} from 'react-native'

export const MainScreen = ({navigation}) => {
  return (
    <View>
      <Button title="공격"
      color="#8B0000"
      onPress={() => navigation.navigate("Attack")}
      />
      <Button title="수비"
      color="#DAA520"
      onPress={() => navigation.navigate("Guard")}
      />
    </View>


  )
}
