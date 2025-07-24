import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
     
      const response = await axios.post("http://localhost:5000/login", { name, password });
      console.log(response.data.user,"this is login")
     
     console.log(response.data.user.name,response.data.user.password===password)
     if(response.data.user.name===name){
      console.log("ok login")
     }
      toast.success("Success! Logged in.");
      navigate('/InvestmentCard');
    
      
    } catch (error) {
      toast.error("Invalid credentials! Try Forgot Password.");
     
    }
  };

  return (
    <>
    
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='bg-[#cebaa8]  shadow-lg rounded-xl p-8 max-w-sm w-full'>
        <h2 className='text-2xl font-semibold text-center text-gray-800 mb-6'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700 font-medium'>Username</label>
            <input
              type='text'
              className='w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none'
              placeholder='Enter Username'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-medium'>Password</label>
            <input
              type='password'
              className='w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none'
              placeholder='Enter Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className='text-right mb-4'>
            <Link to='/forgot-password' className='text-blue-500 hover:underline text-sm'>Forgot Username & Password?</Link>
          </div>
          <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200'>
            Login
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
