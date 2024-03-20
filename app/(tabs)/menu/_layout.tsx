import { Stack,Link } from 'expo-router';
import { Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function MenuLayout() {
  return <Stack screenOptions={{
    headerRight: () => (
      <Link href="/cart" asChild>
        <Pressable>
          {({ pressed }) => (
            <FontAwesome
              name="shopping-cart"
              size={25}
              color={'#EF233C'}
              style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
            />
          )}
        </Pressable>
      </Link>
    )
  }}>
    <Stack.Screen name="index" options={{title:"Menu"}}/>
  </Stack>;
};