import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Login.js';
import Register88 from './Register88';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Cart from './Cart.js';
import InvestmentCard from './InvestCard.js';
import InvestmentGrid from './InvestCard.js';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
 <ToastContainer
  autoClose={2000}
  className={200}
  />
    <BrowserRouter>
   
   <Routes>
    <Route path="/" element={<Register88/>}/>
    <Route path='/InvestmentCard' element={<InvestmentGrid/>}/>
    <Route path='/Login' element={<Login/>}/>
   
   </Routes>
  
  </BrowserRouter> 

 


 </> 
);


