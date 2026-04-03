import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    // cuvamo u localStorage
    favorite: JSON.parse(localStorage.getItem("favorite")) || [],
   
}

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        setFavoriteProduct(state, action) {
            // metodom find kazemo - da nadje poklapanje id izmedju vec dodatog i ovog producta
            const doubleFavorite = state.favorite.find(item => item.id === action.payload.id)

            // Ako postoji onda filtriraj(vrati array nazad) sve koji nemaju isti id
            if (doubleFavorite) {
                state.favorite = state.favorite.filter(item => item.id !== action.payload.id)
            }
            else {
                state.favorite.push(action.payload)
            }
            // naravno cuvamo u localStorage
            localStorage.setItem("favorite", JSON.stringify(state.favorite))
        },
       
    }
})

export const {setFavoriteProduct} = favoriteSlice.actions
export default favoriteSlice.reducer

