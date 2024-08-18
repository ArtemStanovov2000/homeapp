import { createSlice } from "@reduxjs/toolkit";

const searchRequestSlice = createSlice({
    name: "searchRequest",
    initialState: {
        searchRequest: ""
    },
    reducers: {
        setSearchRequest(state, action) {
            state.searchRequest = action.payload
        },
    }
})

export const { setSearchRequest } = searchRequestSlice.actions
export default searchRequestSlice.reducer