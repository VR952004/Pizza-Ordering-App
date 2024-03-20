import { FlatList, View } from 'react-native';
import products from '@/assets/data/products';
import ProductList from '@/components/ProductList';
import { Stack } from 'expo-router';

export default function MenuScreen() {
  return (
    /*<View>
      <ProductList product={products[0]}/>
      <ProductList product={products[1]}/>
      <ProductList product={products[2]}/>
      <ProductList product={products[3]}/>
    </View>
    
    The above method of displaying doesn't allow scrolling of the different added components.
    So to get infinite scroll we make use of FlatList tag.
    */
    
    <FlatList
    data={products}   //It is the data that will be displayed in the list
    renderItem={({item})=> <ProductList product={item} />}   //It takes in a function that it will render 
    numColumns={2}
    />
  );
}
