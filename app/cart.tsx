import { View, Text, FlatList,Platform, StyleSheet, Pressable } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import React from 'react'
import { useCart } from '@/providers/CartProvider'
import CartListItem from '@/components/CartListItem'



const CartScreen = () => {
  const {items,total} = useCart();
  return (
    <View style={styles.Cart}>
      <FlatList data={items}
      renderItem={({item})=><CartListItem cartItem={item} />}
      contentContainerStyle={{paddingVertical:10,gap:10}} />

      <View  style={styles.footer}>
        <Text style={styles.totalText}>Total : ${total.toFixed(2)}</Text>
        <Pressable>
          <View style={styles.button}>
           <Text style={{color:'#2b2d42',fontWeight:'bold'}}>Checkout</Text>
          </View>
        </Pressable>
      </View>
      

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

export default CartScreen;

const styles=StyleSheet.create(
  {
    Cart:{
      padding:10,
      maxHeight:'100%',
    },
    totalText:{
      color:'#d90429',
      fontWeight: 'bold',
    },

    button:{
      backgroundColor:'#ef233c',
      borderColor:'#2b2d42',
      borderWidth:1,
      borderRadius:15,
      paddingVertical:5,
      flexDirection:'row',
      justifyContent:'center',
    },

    footer:{
      padding:5,
      backgroundColor:'#edf2f4',
      borderRadius:10,
      maxWidth:'100%',
    },
  }
)