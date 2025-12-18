import { createSlice } from "@reduxjs/toolkit"
import BookData from "../BookData"

const bookSlice = createSlice({
  name: "books",
  initialState: BookData,
  reducers: {
    addBook: (state, action) => {
      state.unshift(action.payload)
    }
  }
})

export const { addBook } = bookSlice.actions
export default bookSlice.reducer
