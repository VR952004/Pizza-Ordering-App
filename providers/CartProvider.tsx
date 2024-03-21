import { CartItem, Product } from "@/types";
import { PropsWithChildren, createContext,useContext, useState } from "react";

type CartType={
    items: CartItem[];
    addItems: (product:Product, size: CartItem['size'])=> void;
  }

const CartContext = createContext<CartType>({
    items:[],
    addItems: () => {},
});

const CartProvider = ({children}: PropsWithChildren) =>{
    const [items,setItems]=useState<CartItem[]>([])

    const addItems=(product:Product, size: CartItem['size']) => {
        const newCartItem:CartItem={
            id:'1',
            product,
            product_id:product.id,
            size,
            quantity:1
        };
        setItems([newCartItem,...items])
    };
    
    return(
        <CartContext.Provider value={{items, addItems}}>
            {children}
        </CartContext.Provider>
    );    
    
}

export default CartProvider;

export const useCart = () =>useContext(CartContext);