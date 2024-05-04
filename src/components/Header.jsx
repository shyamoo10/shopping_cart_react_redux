import React from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {
  return (
    <div className='header'>
        <h1>SHOPPING CART</h1>
        <nav>
            <li> <Link to='/'>Home</Link></li>
      <li><Link to='/cart'>Cart(0)</Link></li>
        
        </nav>
    </div>
  )
}
