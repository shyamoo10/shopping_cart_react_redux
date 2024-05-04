import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'



export const addedProductSlice= createSlice({
    name:'cartArray',
    initialState:{
      cartArray:[]
    },
    reducers:{
         addProduct: (state,action)=>{
             state.cartArray.push(action.payload)
         }
    }
})




export  const  {addProduct} = addedProductSlice.actions
export default addedProductSlice.reducer