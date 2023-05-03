import {createSlice} from "@reduxjs/toolkit"
import {changePageAction} from  "../actions/admin"

const initialValue = {current: "overview"}

export const adminSlice = createSlice({
    name: "adminDashboard",
    initialState: initialValue,
    reducers: {
        changeAdminPage: changePageAction
    }
})

export const {changeAdminPage} = adminSlice.actions
export default adminSlice.reducer