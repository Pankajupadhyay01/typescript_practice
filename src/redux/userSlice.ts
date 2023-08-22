import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { pro } from '../Type/type'


type productState = {
    data: pro[]
}

const initialState: productState = {
    data: []
}

export const productSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        updateProduct: (state, actions: PayloadAction<pro[]>) => {
            state.data = actions.payload
            
        }
    },
})

export const { updateProduct } = productSlice.actions

export default productSlice.reducer