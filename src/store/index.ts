import { configureStore } from "@reduxjs/toolkit";
import searchRequestSlice from "./searchRequestSlice";
import searchResultSlice from "./searchResultSlice";
import rowDataSlice from "./rowDataSlice";

export default configureStore({
    reducer: {
        searchRequest: searchRequestSlice,
        searchResult: searchResultSlice,
        rowData: rowDataSlice
    }
})
