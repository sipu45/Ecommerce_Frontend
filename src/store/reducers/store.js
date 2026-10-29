import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./ProductReducer";
import { errorReducer } from "./ErrorReducer";
import { cartReducer } from "./cartReducer";
import { authReducer } from "./authReducer";




const user = localStorage.getItem("auth")
        ? JSON.parse(localStorage.getItem("auth"))   //JSON.Stringify() -> Javascript Object -> String  
        : null ; // [] retutrn true that mismatch the logic publicpage and private route                                       // JSON.parse() -> String -> Javascript ObJect

// when app initialie or loads the reducer get cart data from local storage
const cartItems = localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];

const initialState = {
    auth:{user:user},
    carts:{cart:cartItems}
};


export const store = configureStore({
    reducer:{    
          products: productReducer,
          errors : errorReducer,
          carts : cartReducer,
          auth : authReducer,
        },
    preloadedState:initialState,
});


// store.subscribe(() => {
//   localStorage.setItem("cartItems", JSON.stringify(store.getState().carts.cart));
// });
export default store;
