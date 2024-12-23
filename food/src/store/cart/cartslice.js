import { createSlice } from "@reduxjs/toolkit";

  
  const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:[],
        
    },
    reducers:{
       addToCart:(state,action) =>{
        const existingItem = state.cart.find((item ) => item.id === action.payload.id)
        if (existingItem) {
           state.cart = state.cart.map((item)=> item.id === action.payload.id ? {...item,quantity:item.quantity+1}:item)
        } else {
        state.cart.push(action.payload)
        }
            
    },
        removeFromCart:(state,action) =>{
        state.cart = state.cart.filter((item)=> item.id !== action.payload)
    },
         incrementCartQuantity:(state,action) =>{
        state.cart = state.cart.map((item)=> item.id === action.payload ? {...item,quantity:item.quantity+1}:item)
    },
    decrementCartQuantity:(state,action) => {
        
        state.cart = state.cart.map((item)=> {
            if (item.id === action.payload) {
                if (item.quantity <0) {
                    return state.cart.quantity = 1
                }
               return {...item,quantity:item.quantity - 1}
            } else {
                item
            }
        })

        
    },

    searchFoods:(state,action)=>{
        state.cart = state.cart.filter((item) => item.name.toLowerCase().includes(action.payload.toLowerCase()))
    }

    
}
  })

  export const {addToCart,removeFromCart,incrementCartQuantity,decrementCartQuantity,searchFoods} = cartSlice.actions
  export default cartSlice.reducer