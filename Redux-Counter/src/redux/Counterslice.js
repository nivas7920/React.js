import { createSlice } from "@reduxjs/toolkit";

  const initialState={
    value : 0
  }

 export const Conterslice=createSlice({

    name : "counter",
    initialState,
    reducers:{
       
        increment:(state)=>{
            state.value +=1;
        },

        decrement :(state) =>
        {
            state.value -=1;
        }
    }
 })

 export const {increment,decrement}  =Conterslice.actions;

 export default  Conterslice.reducer;