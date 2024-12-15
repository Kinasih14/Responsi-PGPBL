import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import petaniSlice from './slices/petaniSlice';

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        petani: petaniSlice
    },
})
