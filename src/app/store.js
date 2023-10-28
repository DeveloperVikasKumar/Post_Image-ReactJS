import { configureStore } from "@reduxjs/toolkit";
import createPostReducer from '../features/Create Post'

export const store = configureStore({
    reducer : createPostReducer
})
