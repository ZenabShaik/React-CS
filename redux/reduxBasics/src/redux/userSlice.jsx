import { createSlice } from "@reduxjs/toolkit";
import { use } from "react";

const userSlice = createSlice({
    name: "userSlice",
    initialState:{
        user:null,
        loading:true,
        error:false
    },
    reducers:{
        userLoading:(state)=>{
            state.loading=true;
            state.error=false;
        },
        userError:(state)=>{
            state.loading=false;
            state.error=true;
        },
        userData:(state,action)=>{
            state.loading=false;
            state.data=action.payload;
        }
    }
})

export default userSlice;