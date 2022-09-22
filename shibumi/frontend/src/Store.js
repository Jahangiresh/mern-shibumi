// import { createContext, useReducer } from "react";

// export const Store = createContext();

// const initialState = {
//   user_info: localStorage.getItem("userInfo")
//     ? JSON.parse(localStorage.getItem("userInfo"))
//     : null,

//   cart: {
//     shipping_address: localStorage.getItem("address")
//       ? JSON.parse(localStorage.getItem("address"))
//       : {},
//     payment_method: localStorage.getItem("paymentMethod")
//       ? JSON.parse(localStorage.getItem("paymentMethod"))
//       : "",
//     cart_items: localStorage.getItem("products")
//       ? JSON.parse(localStorage.getItem("products"))
//       : [],
//   },
// };


// export function StoreProvider(props) {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const value = { state, dispatch };
//   return <StoreProvider value={value}>{props.children}</StoreProvider>;
// }
