import {Context, createContext, useContext} from "solid-js";
import {createStore} from "solid-js/store";
import {CartItem} from "~/model/cartItem";

 export const CartContext : Context<any> = createContext();

export function CartContextProvider(props:CartItem) {
    const [items,setItems] = createStore<CartItem[]>([
    ]);
    return(
        <CartContext.Provider value={{items, setItems}}>
            {props.children}
        </CartContext.Provider>
    );
}

export default function useCardContext(){
    return useContext(CartContext);
}

