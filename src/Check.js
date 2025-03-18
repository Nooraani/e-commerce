 import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Check = ({items}) => {
    const Order1=useNavigate()
    

     const HandleBtn=(e)=>{
       e.preventDefault()
       Order1('/PlaceOrder1',{state:items})
       
       
      
   }  
    return (
     <>
     <form onSubmit={HandleBtn}>
      <button type='submit' className="mt-48 bg-yellow-300 ml-24 p-2 rounded hover:text-white hover:bg-slate-800" >buy</button>
       </form>

      
     </>
   )
 }

 export default Check
 
