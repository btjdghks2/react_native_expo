import React from 'react';
import {StyleSheet,View} from 'react-native'



export const MainScreen = ({navigation}) => {
  return (
    <View style={styles.container}>

    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  a_button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  b_button: {
    alignItems: 'center',
    backgroundColor: '#8FBC8F',
    padding: 10,
  }

})