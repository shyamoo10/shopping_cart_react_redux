import React from 'react'
import { Header } from './Header'
import { Card } from './Card'
import { useSelector } from 'react-redux'
  import CartComponent from './cartComponent'
import TotalPrice from './TotalPrice'

export const CartPage = () => {
  const {cartArray}=useSelector(state=> state.cartarray)
  return (
      <div  className='cartwrapper'>

        <Header/> 
             <div className='cart'>

            
          {cartArray.length > 0 &&(
            cartArray.map((singleData=>{
               
              return <CartComponent  singleData={singleData.Finaldata}/>

            }))
          )}  

          {cartArray.length ==0 &&   (
              <div>No items in the cart</div>
          )}

            <TotalPrice/>
            </div>
      </div>
  )
}
