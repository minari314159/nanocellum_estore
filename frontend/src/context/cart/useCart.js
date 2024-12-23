import { useContext, createContext } from "react";
export const CartContext = createContext({});

export function useCart() {
	const { cart, dispatch } = useContext(CartContext);
	return { cart, dispatch };
}
