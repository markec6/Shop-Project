import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isHeader: true, //state za x u Header
    // ako ovde stavimo prazan string "" - tek posle klika priakzuje producte
    // ako stavimo ovako kao pocetnu neku kat, onda je on prva pri refresu
    selectedCategory: "Laptops"
}

const productSlice = createSlice({
    name: "product",
    initialState, // initialState - uvek mora da bude sa malim slovom
    reducers: {
        setIsHeader(state) {
            state.isHeader = !state.isHeader
            // posto je samo true i false
        },
        setSelectedCategory(state, action) {
            state.selectedCategory = action.payload
        }
    }
})

export const {setIsHeader, setSelectedCategory} = productSlice.actions
export default productSlice.reducer;