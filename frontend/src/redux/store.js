import { configureStore } from '@reduxjs/toolkit'
import { productsSlice } from './productsSlice'
import { generationSlice } from './generationSlice'
import { userSlice } from './user'

export const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        keyword: generationSlice.reducer,
        user: userSlice.reducer
    },
})