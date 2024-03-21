import CartListItem from "@/components/CartListItem";
import { CartItem, Product } from "@/types";
import { PropsWithChildren, createContext,useContext, useState } from "react";

type CartType={
    items: CartItem[];
    addItems: (product:Product, size: CartItem['size'])=> void;
    updateQuantity : (itemId : string, amount: -1 | 1) => void;
  }

const CartContext = createContext<CartType>({
    items:[],
    addItems: () => {},
    updateQuantity: () => {},
});

const CartProvider = ({children}: PropsWithChildren,) =>{
    const [items,setItems]=useState<CartItem[]>([])

    const addItems=(product:Product, size: CartItem['size']) => {
        const newCartItem:CartItem={
            id:product.name,
            product,
            product_id:product.id,
            size,
            quantity:1
        };
        setItems([newCartItem,...items])
    };
    
    const updateQuantity = (itemId: string, amt: -1 | 1) => {
        const updatedItem = items.map(item => item.id !== itemId ? item : { ...item, quantity: item.quantity + amt });
        setItems(updatedItem);
    };

    return(
        <CartContext.Provider value={{items, addItems,updateQuantity}}>
            {children}
        </CartContext.Provider>
    );    
    
}

export default CartProvider;

export const useCart = () =>useContext(CartContext);