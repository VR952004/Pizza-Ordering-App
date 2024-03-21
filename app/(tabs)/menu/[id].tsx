import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@/assets/data/products'
import { useState } from 'react'
import { useCart } from '@/providers/CartProvider'
import { PizzaSize } from '@/types'

const ProductDetails = () => {
  const [selectedState,setSelectedState] = useState<PizzaSize>('M')
  const sizes=['S','M','L','XL'];
  const {id}=useLocalSearchParams();
  const product=products.find((p)=>p.id.toString()==id);
  const {addItems}=useCart();

    if(!product){
      return <Text >Product not found.</Text>
    }
  
  const addToCart=()=>{
    if(!selectedState){return;}
    addItems(product,selectedState)
  }

  let updated_price;
  if(selectedState=='S')  updated_price=0.75*product.price;

  else if(selectedState=='M') updated_price=product.price;

  else if(selectedState=='L') updated_price=1.25*product.price;

  else updated_price=1.5*product.price;

  
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: product.name}}/>
      <Image source={{uri: product.image}} style={styles.image}/>
      

      <Text style={styles.text}>Select size:</Text>
      <View style={styles.sizesOuterContainer}>
      {sizes.map(size => 
      <Pressable onPress={() => {setSelectedState(size)}}
      key={size}
      style={[styles.sizesInnerContainer,{backgroundColor: selectedState == size ? "#D90429" : "#ccd0d9"}]}>
        <Text style={[styles.sizesText,{color: selectedState == size ? '#EDF2F4':'#2B2D42'}]}>{size}</Text>
      </Pressable>
      )}
      </View>

      <Text style={styles.descText}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
        ipsam ut necessitatibus voluptatum praesentium, porro, modi perspiciatis
        consectetur ratione debitis dolores, provident veritatis delectus est unde
        perferendis quo deserunt sint?
      </Text>
    
      <Text style={styles.text}>Price : $ {updated_price.toFixed(2)}</Text>

      <Pressable onPress={addToCart} style={styles.orderButton}>
        <Text style={styles.buttonText}>Add to Cart </Text>
      </Pressable>
      
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDF2F4",
    padding: 20,
    borderRadius: 10,
    flex: 1,
    margin: 5,
  },

  sizesOuterContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  sizesInnerContainer:{
    backgroundColor: "#ccd0d9",
    width:30,
    aspectRatio: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,

  },

  sizesText:{
    fontWeight: "bold",
    color: "#2B2D42"
  },

  text:{
    fontWeight: "bold",
    color: "#D90429",
    marginVertical: 20,
  },

  image:{
    width: '100%',
    aspectRatio: 1,
  },

  descText:{
    color:'#8D99AE',
    fontWeight:'bold',
  },

  buttonText:{
    fontWeight: "bold",
    color: "#2B2D42",
  },

  orderButton:{
    backgroundColor:'#EF233C',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center', 
    height:30,
    borderRadius:15,
  },
});