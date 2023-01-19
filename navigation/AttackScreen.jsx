import React from 'react'
import {View,Button,Text} from 'react-native'

export const AttackScreen = ({navigation}) => {
  return (
    <View>
      <Text>AttackScreen</Text>
<Button title="뒤로가기" onPress={() => navigation.pop()} />

    </View>
  )
}
