import CartListItem from "@/components/CartListItem";
import { CartItem, Product } from "@/types";
import { PropsWithChildren, createContext,useContext, useState } from "react";
import {randomUUID} from 'expo-crypto';

type CartType={
    items: CartItem[];
    addItems: (product:Product, size: CartItem['size'])=> void;
    updateQuantity : (itemId : string, amount: -1 | 1) => void;
    total:number;
  }

const CartContext = createContext<CartType>({
    items:[],
    addItems: () => {},
    updateQuantity: () => {},
    total:0,
});

const CartProvider = ({children}: PropsWithChildren,) =>{
    const [items,setItems]=useState<CartItem[]>([])

    const addItems=(product:Product, size: CartItem['size']) => {
        const existingItem= items.find((item)=>item.product===product && item.size===size);
        if(existingItem){
            updateQuantity(existingItem.id,1);
            return;     //Returning will help apply the changes on the cart.
        }

        let updatedPrice = product.price;
        if (size === 'S') updatedPrice *= 0.75;
        else if (size === 'L') updatedPrice *= 1.25;
        else if (size === 'XL') updatedPrice *= 1.5;
        

        const newCartItem:CartItem={
            id:randomUUID(),
            product,
            product_id:product.id,
            size,
            quantity:1,
            price:updatedPrice,
        };
        setItems([newCartItem,...items])

    };
    
    const updateQuantity = (itemId: string, amt: -1 | 1) => {
        const updatedItem = items.map(item => 
            item.id !== itemId ? item : { ...item, quantity: item.quantity + amt }).filter(item=>item.quantity>0);
        setItems(updatedItem);
    };

    const total=items.reduce((sum,item)=>(sum+=item.price* item.quantity),0);

    return(
        <CartContext.Provider value={{items,addItems,updateQuantity,total}}>
            {children}
        </CartContext.Provider>
    );    
    
}

export default CartProvider;

export const useCart = () =>useContext(CartContext);