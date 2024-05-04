import { configureStore } from '@reduxjs/toolkit'
import counterReducer from   './CounterSlice.js'
import  addProductReducer  from './AddedProductSlice.js'
export default configureStore({
  reducer: {
    cartarray: addProductReducer,
     counter:counterReducer
      
  }
})

