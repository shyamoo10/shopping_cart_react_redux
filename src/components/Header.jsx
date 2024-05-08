import React from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
export const Header = () => {
  const {cartArray}=useSelector(state=> state.cartarray)
  return (
    <div className='header'>
        <h1>SHOPPING CART</h1>
        <nav>
            <li> <Link to='/'>Home</Link></li>
      <li><Link to='/cart'>Cart({cartArray.length})</Link></li>
        
        </nav>
    </div>
  )
}
