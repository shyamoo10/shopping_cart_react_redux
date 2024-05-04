import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import 'tailwindcss/tailwind.css';
import { Header } from './components/Header';
import { Card } from './components/Card';
import useFetch from './Hooks/fetch';


function App() {
  
   const {data,isLoading,error}= useFetch('https://fakestoreapi.com/products/category/jewelery')
  return (
    <div  className='home'>
        <Header/>
         {isLoading &&   (
        <div>Loading....</div>
         )}
         {error && (
        <div>{error}</div>
         )}
            <div className='cards'>
            {(data && data.length > 0) && 
             data.map((singleData=>{
                return <Card singleData={singleData}  key={singleData.id}/>
                 
             }))  }
            </div>
        
       
    </div>
  )
}

export default App
