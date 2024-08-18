import { configureStore } from "@reduxjs/toolkit";
import searchRequestSlice from "./searchRequestSlice";
import searchResultSlice from "./searchResultSlice";

export default configureStore({
    reducer: {
        searchRequest: searchRequestSlice,
        searchResult: searchResultSlice
    }
})
