import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Platform } from 'react-native'
import React from 'react'
import { useCart } from '@/providers/CartProvider'
import { CartItem, Product } from '@/types'



const CartScreen = () => {
  const {items} = useCart();
  return (
    <View>
      <Text style={{color:'#EF233C'}}>Length of the cart: {items.length}</Text>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

export default CartScreen;