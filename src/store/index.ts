import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { mainSlice } from "./sliceStore/mainSlice";

const rootReducer = combineReducers({
    mainSlice: mainSlice.reducer
});

const middleware = getDefaultMiddleware({
    thunk: true,
    immutableCheck: false,
    serializableCheck: false,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: middleware
});
// Создание типа хранилища
export type Store = ReturnType<typeof store.getState>
// Определение типа диспатча
export type AppDispatch = typeof store.dispatch