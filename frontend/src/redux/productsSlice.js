import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],
    product: {},
    categorys: [],
    loading: false
}

export const getProducts = createAsyncThunk('getProduct', async (params = {}) => {
    console.log("params", params);
    try {
        const { keyword, category, price } = params;
        const response = await axios.get(`http://localhost:3000/products`, {
            params: {
                keyword,
                category,
                price: {
                    gte: price?.min,
                    lte: price?.max
                }
            }
        })
        console.log(response.data.products);
        return response.data.products;
    } catch (error) {
        console.log(error);
    }

})

export const getProduct = createAsyncThunk('product', async (id) => {
    const response = await axios.get(`http://localhost:3000/product/${id}`)
    console.log(response.data.product);
    return response.data.product
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
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.loading = false
            state.product = action.payload
        })


    }
})

export default productsSlice.reducer