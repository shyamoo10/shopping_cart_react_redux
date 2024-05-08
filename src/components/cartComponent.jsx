import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../Redux/AddedProductSlice'

const  CartComponent = ({singleData}) => {
    
    
    const {cartArray} = useSelector(state=>  state.cartarray)
    const dispatch= useDispatch()
   
   console.log(typeof(singleData.id))
  return (
    <div className='cartComponent'> 
           <img src={singleData.image}alt="" />
             <h4>{singleData.title}</h4>
              <p>Price: {singleData.totalPrice}</p>
              <button onClick={()=> dispatch(removeItem(singleData.id))}>Remove</button>
    </div>
  )
}
export default CartComponent;
