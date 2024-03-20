import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Product } from '@/types';
import ProductDetails from '@/app/(tabs)/menu/[id]';
import { Link } from 'expo-router';

type ProductListType={
    product: Product
}

const ProductList = ({product}:ProductListType) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
    <Pressable style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image}/>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </Pressable>
    </Link>
  );
}

export default ProductList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDF2F4",
    padding: 10,
    borderRadius: 20,
    flex: 1,
    margin: 5,
    maxWidth: '50%',
  },

  title: {
    color: "#D90429",
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 5,
  },

  price: {
    fontWeight: "bold",
    color: "#2B2D42"
  },

  image:{
    width: '100%',
    aspectRatio: 1,
  }
  
});
