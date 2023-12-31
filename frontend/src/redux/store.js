import { configureStore } from '@reduxjs/toolkit'
import { productsSlice } from './productsSlice'
import { generationSlice } from './generationSlice'

export const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        keyword: generationSlice.reducer
    },
})