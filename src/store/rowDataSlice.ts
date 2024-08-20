import { createSlice } from "@reduxjs/toolkit";

const rowDataSlice = createSlice({
    name: "rowData",
    initialState: {
        rowData: ""
    },
    reducers: {
        setRowData(state, action) {
            state.rowData = action.payload
        },
    }
})

export const { setRowData } = rowDataSlice.actions
export default rowDataSlice.reducer