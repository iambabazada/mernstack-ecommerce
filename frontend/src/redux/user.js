import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    user: {},
    loading: false,
    isAuth: false
}



export const register = createAsyncThunk('product', async (data) => {
    const response = await axios.post(`http://localhost:3000/register`, data)
    console.log(response.data);
    return response.data
})



export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, (state, action) => {
            state.isAuth = true
            state.user = action.payload
        })

    }
})

export default userSlice.reducer