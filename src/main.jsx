import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
 
import configurestore from './Redux/configureStore.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CardDetails } from './components/cardDetails.jsx'
import { ErrorElement } from './components/ErrorElement.jsx'
import { CartPage } from './components/CartPage.jsx'
 const store= configurestore
   const router= createBrowserRouter([
    {
      path:'/',
      element:<App/>,
      errorElement:<ErrorElement/>
    },{
      path:'cardDetails/:id',
      element:<CardDetails/>
    } ,
     {
      path:'cart',
      element:<CartPage/>
     }
   ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
     <RouterProvider router={router}/>
     </Provider>
  </React.StrictMode>,
)
