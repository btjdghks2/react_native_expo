import React from 'react'
import {View, Button,Text} from 'react-native'

export const GuardScreen = ({navigation}) => {
  return (
    <View><Text>GuardScreen</Text>
    <Button title="뒤로가기" onPress={() => navigation.pop()} />
    </View>
  )
}
