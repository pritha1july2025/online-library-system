// Redux store configuration for the Online Library System

import { configureStore } from "@reduxjs/toolkit"

import bookReducer from "./bookSlice"

export const store=configureStore({
    reducer:{
        books:bookReducer
    }
})