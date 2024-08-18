import { createSlice } from "@reduxjs/toolkit";

const searchResultSlice = createSlice({
    name: "searchResult",
    initialState: {
        searchResult: []
    },
    reducers: {
        setSearchResult(state, action) {
            state.searchResult = action.payload
        },
    }
})

export const { setSearchResult } = searchResultSlice.actions
export default searchResultSlice.reducer