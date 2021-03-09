import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Store } from "..";

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

export const mainSlice = createSlice({
    name: 'main',

    initialState,

    reducers: {
        plusPlis: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }
})

export const { plusPlis } = mainSlice.actions

export const selectCount = (state: Store) => state.mainSlice.value

export default mainSlice.reducer