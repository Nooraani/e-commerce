import React from 'react'
import { useLocation } from 'react-router-dom'
import BuyForm from './BuyForm'
import UserCLickItem from './UserCLickItem'
import Header from './Header'
const PlaceOrder1 = () => {
    const Location=useLocation()
    const Items=Location.state || {}
    console.log("this is PLaceOrder",Items)
    const Img=Items.image
    
  return (
    <>
    <Header/>
       <div  className="flex max-w-full  p-4 mb-2 bg-white shadow-md rounded-lg">
                <img src={Items.image} alt={Items.title} className="min-h-80 w-72 ml-56 " />
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-semmibold">{Items.title}</h2>
                  <h1 className="font-bold">$ {Items.price}</h1>
                
                </div>
                
              <div className='flex mr-40'>
                <UserCLickItem item={Items}/>
              </div>
             
                

              
       
     

</div>
    </>
  )
}

export default PlaceOrder1
