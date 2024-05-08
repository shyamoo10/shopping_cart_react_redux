import React from 'react'
import { useSelector } from 'react-redux'

  const TotalPrice = () => {
    let   FullTotalPrice=0
    const {cartArray}=useSelector(state=> state.cartarray)
   
  return (
    <div className='totalprice'> 
             {cartArray.length > 0  && (
                 cartArray.forEach((singleData)=>{
                  
                        FullTotalPrice+=  parseInt(singleData.Finaldata.totalPrice )
                
                 
                 })
               
             )}

              <div>TotalPrice {parseInt(FullTotalPrice)}</div>
    </div>
  )

}

export default TotalPrice;