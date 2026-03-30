import { createSlice } from "@reduxjs/toolkit";

// Pravimo novi slice bas za Cart state jer cemo ga imati na dosta mesta

const initialState = {
    // ide u localStorage sa imenom "cart", parse u string, || [], ako je neko prvi put tu, local je prazan(null), dodajemo [] - prazan array da ponisti null
    cart: JSON.parse(localStorage.getItem("cart")) || []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Celu logiku radimo za issti state i to u reducer
        
       setCart(state, action) {
            // provera da li uopste imamo podatke da radimo, iako imamo da li podatak ima id  -  ako je sve ovo true onda nastavi dalje (return)
            if (!action.payload || !action.payload.id) return;

            // Ovde kazemo sa metodom findIndex, kazemo da bas unutar ove itemIndex varijable (product u korpi ima isti id sa novim nadolazecim)
            const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);

            if (itemIndex >= 0) {
                // ako postoji isti - Samo povećaj broj komada
                state.cart[itemIndex].quantity += 1;
            } else {
                // ao je novi dodaj ga sa quantity : 1
                // definisemo quantity sami zbog racunanja cene 
                state.cart.push({ ...action.payload, quantity: 1 });
            }
            
            // ubacivanje u localStorage jer nemamo backend
            // da bi posle refresa stranice korpa idalje bila napunjena
            localStorage.setItem("cart", JSON.stringify(state.cart));
        }
    }
})

export const {setCart} = cartSlice.actions
export default cartSlice.reducer