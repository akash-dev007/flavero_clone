import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartslice";
import searchReducer from "./cart/searchSlice";
import categoryReducer from './cart/categorySlice'
   const store = configureStore({
    reducer:{
        cart:cartReducer,
        search:searchReducer,
        category:categoryReducer
    }
   })

   export default store