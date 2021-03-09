import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppDispatch, Store } from "."

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<Store> = useSelector