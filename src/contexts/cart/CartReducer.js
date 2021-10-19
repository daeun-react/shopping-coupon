import {
  TOGGLE_CART,
  DELETE_CART,
  MINUS_CART_COUNT,
  PLUS_CART_COUNT,
  TOGGLE_CHECK_ALL,
  TOGGLE_CHECK,
} from "contexts/cart";

export function cartReducer(state, action) {
  switch (action.type) {
    case TOGGLE_CART:
      const newCart = !!state.cart.find((item) => item.id === action.payload.id)
        ? state.cart.filter((item) => item.id !== action.payload.id)
        : state.cart.concat({ ...action.payload, checked: true });

      if (newCart.length > 3) {
        alert("장바구니에는 최대 3개까지 담을 수 있습니다.");
        return state;
      }
      return {
        ...state,
        cart: newCart,
      };

    case DELETE_CART:
      return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };

    case MINUS_CART_COUNT:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, count: item.count - 1 } : item
        ),
      };

    case PLUS_CART_COUNT:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, count: item.count + 1 } : item
        ),
      };

    case TOGGLE_CHECK_ALL:
      return {
        ...state,
        cart: state.cart.map((item) => {
          const newItem = { ...item, checked: action.payload };
          return newItem;
        }),
      };

    case TOGGLE_CHECK:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, checked: !item.checked } : item
        ),
      };

    default:
      return state;
  }
}
