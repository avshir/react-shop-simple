import { createContext, useReducer, ReactNode } from "react";
import { reducer } from "../reducer";
import { ICartItem, IGood } from "../services/models";

export interface IShopState {
  goods: IGood[] | [];
  loading: boolean;
  order: ICartItem[] | [];
  isBasketShow: boolean;
  alertName: string;
  closeAlert: () => void;
  removeFromBasket: (itemId: string) => void;
  addToBasket: (item: ICartItem) => void;
  incQuantity: (itemId: string) => void;
  decQuantity: (itemId: string) => void;
  handleBasketShow: () => void;
  setGoods: (data: IGood[]) => void;
}

const initState: IShopState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: "",
  closeAlert: () => {},
  removeFromBasket: () => {},
  addToBasket: () => {},
  incQuantity: () => {},
  decQuantity: () => {},
  handleBasketShow: () => {},
  setGoods: () => {},
};

export const ShopContext = createContext<IShopState>(initState);

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const actionCreators = {
    closeAlert: () => dispatch({ type: "CLOSE_ALERT" }),
    removeFromBasket: (itemId: string) =>
      dispatch({ type: "REMOVE_FROM_BASKET", payload: itemId }),
    addToBasket: (item: ICartItem) =>
      dispatch({ type: "ADD_TO_BASKET", payload: item }),
    incQuantity: (itemId: string) =>
      dispatch({ type: "INC_QUANTITY", payload: itemId }),
    decQuantity: (itemId: string) =>
      dispatch({ type: "DEC_QUANTITY", payload: itemId }),
    handleBasketShow: () => dispatch({ type: "TOGGLE_BASKET" }),
    setGoods: (data: IGood[]) => dispatch({ type: "SET_GOODS", payload: data }),
  };

  return (
    <ShopContext.Provider value={{ ...state, ...actionCreators }}>
      {children}
    </ShopContext.Provider>
  );
};

