import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice'
import cartReducer from './cartSlice'
import favoriteReducer from './favoriteSlice'



const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        favorite: favoriteReducer
    }
})

export default store