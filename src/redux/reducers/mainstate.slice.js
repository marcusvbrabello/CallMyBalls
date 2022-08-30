
import { createSlice } from '@reduxjs/toolkit'

export const mainStateSlice = createSlice({
    name: 'mainState',
    initialState: {
        number: ''
    },
    reducers: {
        changeNumber(state, { payload }) {
            return {...state, number: payload}
        }
    }
})

export const {
    changeNumber
} = mainStateSlice.actions

export const {
    number,
} = state => state;

export default mainStateSlice.reducer;