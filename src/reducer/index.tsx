import { IShopState } from "../context/index";
import { ICartItem, IGood } from "../services/models";

type State = IShopState;
interface IAction {
  type: string;
  payload?: IGood | IGood[] | ICartItem | string;
}

export const reducer = (state: State, { type, payload }: IAction) => {
  switch (type) {
    case "SET_GOODS":
      return { ...state, goods: payload as IGood[], loading: false };
    case "ADD_TO_BASKET":
      let newOrder: ICartItem[] | [] = [];
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.mainId === (payload as IGood).mainId
      );

      if (itemIndex < 0) {
        const newItem = { ...payload as ICartItem, quantity: 1 };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }
      return {
        ...state,
        order: newOrder,
        alertName: (payload as IGood).displayName,
      };

    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        order: state.order.filter(
          (orderItem) => orderItem.mainId !== (payload as string)
        ),
      };
    case "INC_QUANTITY":
      return {
        ...state,
        order: state.order.map((orderItem) => {
          if (orderItem.mainId === (payload as string)) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        }),
      };
    case "DEC_QUANTITY":
      return {
        ...state,
        order: state.order.map((orderItem) => {
          if (orderItem.mainId === (payload as string)) {
            return {
              ...orderItem,
              quantity: orderItem.quantity - 1,
            };
          } else {
            return orderItem;
          }
        }),
      };
    case "CLOSE_ALERT":
      return { ...state, alertName: "" };
    case "TOGGLE_BASKET":
      return { ...state, isBasketShow: !state.isBasketShow };
    default:
      return state;
  }
};
