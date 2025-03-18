import React, { useState } from 'react'
import Api from './Api.json'
const PLaceOrder = () => {
  const [Api1,setApi]=useState([])
  const CheckSubmit=()=>{
    setApi(Api)
  }
  return (
    <>
    <div>
        <button onClick={CheckSubmit}>Get</button>
      </div>
      <div>
     <ul>
      {Api1.map((item)=>{
        return(
          <>
          <h1>{item.price}</h1>
          <img src={item.image} alt='not found' className='h-8' />
          </>
        )
      })}
     </ul>
    </div>
    </>
  )
}

export default PLaceOrder
