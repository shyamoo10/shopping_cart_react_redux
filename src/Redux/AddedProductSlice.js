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
         },
          removeItem:(state,action)=>   void(  state.cartArray=   state.cartArray.filter((product)=> product.Finaldata. id !== action.payload))
  

         
    }
})




export  const  {addProduct,removeItem} = addedProductSlice.actions
export default addedProductSlice.reducer