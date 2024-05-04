import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/fetch'
import { Header } from './Header'
import { Card } from './Card'
import { ErrorElement } from './ErrorElement'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, manual } from '../Redux/CounterSlice'
import { addProduct } from '../Redux/AddedProductSlice'

export const CardDetails = () => {
    const {count} = useSelector(state=> state.counter)
    const {cartArray}=useSelector(state=> state.cartarray)
    const dispatch= useDispatch()
     const  {id} = useParams()
   const {data,isLoading,error}=useFetch(`https://fakestoreapi.com/products/category/jewelery`)
   const handleSubmit=(singleData)=>{
        dispatch(addProduct(singleData))
       
   }

  return (
 <div  className='cardDetails'>
     <Header/>
      {isLoading &&   (
        <div>Loading...</div>

      )
}
    {error &&  (
        <div>{error}</div>
    )}
          <div>
            {(data &&  data.length >0) && (
             data.map((singleData)=>{
                if(singleData.id ==id){
                    return (
                        <div key={singleData.id} className='individual_card'>
                           <img src={singleData.image} alt="" />
                           <h4>{singleData.title}</h4>
                           <p>Price: {singleData.price}</p>
                            <p>Description: {singleData.description}</p>
                            <button  onClick={()=> dispatch(decrement())} >-</button>
                           <input type="number"  value={count} onChange={(e)=>dispatch(manual(e.target.value)) } />
                            <button onClick={()=> dispatch(increment())}>+</button>
                             
                            <button  onClick={()=>handleSubmit(singleData) }>Add to Cart</button>
                        </div>
                       
                        
                    )
                } 
             })
            )}
          </div>
 </div>
  )
}
