import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App1 from './Project25';
import App2 from './Project88';
import Register88 from './Register88';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './Login';
import PLaceOrder from './PLaceOrder';
import Main from './Project/Main';
import { ToastContainer } from 'react-toastify';
import Check from './Check';
import PlaceOrder1 from './PlaceOrder1';
import InvoiceForm from './Project/Component/InvoiceForm';
import PaymentForm from './PaymentOption';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <React.StrictMode>
     <App />
   </React.StrictMode>
    <App1/>
  <App2/> */}
 {/* <Main/> */}
 <ToastContainer
  autoClose={2000}
  />
    <BrowserRouter>
   <Routes>
    <Route path="/Stop" element={<Register88/>}/>
    <Route path='/' element={<App2/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/PlaceOrder1' element={<PlaceOrder1/>}/>
    <Route path='/PaymentForm' element={<PaymentForm/>}/>
    <Route path='/Main' element={<Main/>}/>
   </Routes>
  </BrowserRouter> 

  {/* <PLaceOrder/> */}
 </> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-v
