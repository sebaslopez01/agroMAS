import { createContext, ReactNode, useReducer } from "react";
import { getCookie, hasCookie, setCookie } from "cookies-next";

export const Store = createContext({});

const initialState = {
  cart: hasCookie("cart") ? JSON.parse(getCookie("cart")?.toString()!) : [],
};

enum StoreActionKind {
  CART_ADD_ITEM = "CART_ADD_ITEM",
  CART_REMOVE_ITEM = "CART_REMOVE_ITEM",
  CART_RESET = "CART_RESET",
}

interface StoreAction {
  type: StoreActionKind;
  payload: { id: string; quantity: number };
}

interface StoreState {
  cart: { id: string; quantity: number }[];
}

function reducer(state: StoreState, action: StoreAction) {
  switch (action.type) {
    case StoreActionKind.CART_ADD_ITEM: {
      const newItem = action.payload;
      const existItem = state.cart.find((item) => item.id === newItem.id);
      const cartItems = existItem
        ? state.cart.map((item) => (item.id === existItem.id ? newItem : item))
        : [...state.cart, newItem];

      setCookie("cart", JSON.stringify([...state.cart, ...cartItems]));
      return { ...state, cart: [...state.cart, ...cartItems] };
    }
    case StoreActionKind.CART_REMOVE_ITEM: {
      const cartItems = state.cart.filter(
        (item) => item.id !== action.payload.id
      );

      setCookie("cart", JSON.stringify([...state.cart, ...cartItems]));
      return { ...state, cart: [...state.cart, ...cartItems] };
    }
    case StoreActionKind.CART_RESET: {
      setCookie("cart", "[]");
      return {
        ...state,
        cart: [],
      };
    }
    default:
      return state;
  }
}

interface StoreProviderProps {
  children: ReactNode;
}

export function StoreProvider({ children }: StoreProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{children}</Store.Provider>;
}
