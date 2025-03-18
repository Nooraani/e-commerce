import React, { useState } from 'react'
import Notes from './Component/Notes'
import Footer from './Component/Footer'
import Table from './Component/Table'
import Header from './Component/Header'
import MainDetails from './Component/MainDetails'
import ClientsDetails from './Component/ClientsDetails'
import Dates from './Component/Dates'
import InvoiceForm from './Component/InvoiceForm'
import { useLocation, useNavigate } from 'react-router-dom'

const Main = () => {
    const PAy_Now=useNavigate()
   const Location=useLocation()
   const items=Location.state || {} // yah isliye ke agr items me kuchh nhi ho to error nhi  aye 
    const [ShowInvoice, setShowInovice] = useState(true)
    console.log("this is quatity",items.Items.qauntity)
   const [qauntityCal,setAmount] =useState(items.qauntity)
   console.log(items.Items.Material)
   const HandlePay=()=>{
    PAy_Now('/PaymentForm',{state:items})
   }
    return (
        <>
            <main className='m-5 p-5 lg:max-w-xl lg:mx-auto bg-white rounded shadow'>

                {ShowInvoice ? (
                    <div>
                        <Header />

                        <MainDetails  />
                        

                        <ClientsDetails name={items.name} address={items.address} />

                        <Dates />


                        <Table ItemDescription={items.Items.items.title}
                         Quantity={items.Items.qauntity} Price={items.Items.items.price}
                          Amount={qauntityCal} 
                          Material={items.Items.Material}
                          Size={items.Items.size}
                          />




                        <Notes />

                   <hr></hr>

                        {/* <Footer name={items.name} address={items.address} Email={items.email} Phone={items.phone} Amount={items.Items.price} Quantity={items.Items.qauntity}  /> */}


                        
                        <button
                                onClick={HandlePay}
                                className=' bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 boder-blue-500 hover:bg-transparent hover:text-blue-500 '>Buy</button>
                    </div>
                ) : (
                    
                    <>
                       
                        

                          <InvoiceForm Amount={items.Items.price} setAmount={qauntityCal}  />

                
                            


                        

                    </>

                )}
            </main>
        </>
    )
}

export default Main
