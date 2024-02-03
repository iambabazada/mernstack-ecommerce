import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    keyword: ''
}

export const generationSlice = createSlice({
    name: 'generationSlice',
    initialState,
    reducers: {
        keywordFilter: (state, action) => {
            state.keyword = action.payload
        },
    },
})

export const { keywordFilter } = generationSlice.actions

export default generationSlice.reducer