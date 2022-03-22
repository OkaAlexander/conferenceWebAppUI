import { createSlice } from "@reduxjs/toolkit";
import { printReducerState } from "../../data/state";


const PrintReducer=createSlice({
    name:"PrintReducer",
    initialState:printReducerState,
    reducers:{
        setValues:(state,action)=>{
            state.values=action.payload;
        },
        
    }
})


export default PrintReducer.reducer;
export const {setValues}=PrintReducer.actions