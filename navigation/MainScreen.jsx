import React from 'react'
import { View,Button } from 'react-native'

export const MainScreen = () => {
  return (

    <View>
        <Button
        title= "공격분석"
        onPress={() => navigation.navigate('Attack')}/>
        <Button
        title= "수비분석"
        onPress={() => navigation.navigate('Guard')}/>


    </View>

  )
}
