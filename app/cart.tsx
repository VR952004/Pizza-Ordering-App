import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Platform } from 'react-native'
import React from 'react'

const CartScreen = () => {
  return (
    <View>
      <Text style={{color:'#EF233C'}}>CartScreen</Text>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

export default CartScreen;