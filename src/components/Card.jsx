import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({singleData}) => {
  return (
    <div className='card'>

        <Link to={`/cardDetails/${singleData.id}`} >
        <img src={singleData.image}></img>
           <h3>{singleData.title}</h3>
        </Link>
       

    </div>
  )
}
