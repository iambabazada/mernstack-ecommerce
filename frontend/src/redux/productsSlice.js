import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],
    categorys: [],
    loading: false
}

export const getProducts = createAsyncThunk('getProduct', async (params) => {
    try {
        const { keyword, categories } = params || {};
        let link = `http://localhost:3000/products?keyword=${keyword}`;
        if (categories) {
            link = `http://localhost:3000/products?keyword=${keyword}&category=${categories}`;
        }
        const response = await axios.get(link)
        console.log(response.data.products);
        return response.data.products;
    } catch (error) {
        console.log(error);
    }

})

export const addProducts = createAsyncThunk('addProduct', async (data) => {
    try {
        const response = await axios.post('http://localhost:3000/products', data)
        return response.data.products;
    } catch (error) {
        console.log(error);
    }
})



export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })

        builder.addCase(addProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = state.products.push(action.payload)
        })

    }
})

export default productsSlice.reducer