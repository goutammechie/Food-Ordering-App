import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    address: {}
}

export const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        setAddress: (state, action) => {
            return  {address: action.payload } //the payload is the data that your reducer will use to update the state
        },
        clearAddress: (state) => {
            return { address: {}}
        }
    }
})

export const getAddress = state => state.address.address

export const { setAddress, clearAddress } = addressSlice.actions

export default addressSlice.reducer