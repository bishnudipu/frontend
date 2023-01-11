import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    createPopup:false,
    tabsValue:0
}

let popupSlice = createSlice({
    name:"popup",
    initialState:initialState,
    reducers:{
        setAddCreatRfpPopUp:function(state,action){
            state.createPopup = !state.createPopup
        },
        setTabsValue:function(state,action){
            state.tabsValue = action.payload
        }
    }
})

export const {
    setAddCreatRfpPopUp,
    setTabsValue
} = popupSlice.actions
export default popupSlice.reducer