import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// This file contains custom hooks for dispatching actions and selecting state from the Redux store.
// It uses TypeScript to provide type safety for the Redux store's state and dispatch functions.
