import { configureStore } from "@reduxjs/toolkit";
import createPostReducer from '../features/Create Post/createPostSlice'

export const store = configureStore({
    reducer : createPostReducer
})
