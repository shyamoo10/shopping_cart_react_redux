import { createSlice } from '@reduxjs/toolkit'
 


export  const counterSlice=createSlice({
    name:"counter",
    initialState:{
    count:0
    }, 
     reducers:{
        increment:(state)=>{
            state.count+=1
        },
        decrement:(state)=>{
            state.count-=1
        },
        manual:(state,action)=>{
             state.count =  parseInt(action.payload) 
        }
     }
})

export const {increment, decrement,manual}= counterSlice.actions
export default counterSlice.reducer