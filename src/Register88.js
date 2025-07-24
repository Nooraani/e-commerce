import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Register88 = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const checkResponse = await axios.post('http://localhost:5000/Check-Value', {
            email: formData.email,
            name: formData.name,
          });
    
        const Data = await axios.post('http://localhost:5000/Project88', formData);
        console.log("Backend Response:", Data);

          toast.success('Registration successful!');
          navigate('/Cart');
        } catch (error) {
          console.error('Error:', error);
      
          const errorMsg =
            error.response?.data?.error || error.response?.data?.message || 'Something went wrong';
      
          toast.error(errorMsg);
        }
      };
      

    return (
        <div className='flex justify-center items-center min-h-screen shadow-black  bg-gray-100'>
            <div className='bg-[#cebaa8]  p-8 rounded-xl shadow-lg w-full max-w-md'>
                <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>Register</h2>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <label className='block text-gray-600 mb-1'>Username</label>
                        <input type='text' name='name' className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400' placeholder='Enter Username' onChange={handleChange} />
                    </div>
                    <div>
                        <label className='block text-gray-600 mb-1'>Email</label>
                        <input type='email' name='email' className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400' placeholder='Enter Email Address' onChange={handleChange} />
                    </div>
                  
                    <div>
                        <label className='block text-gray-600 mb-1'>Password</label>
                        <input type='password' name='password' className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400' placeholder='Enter Password' onChange={handleChange} />
                    </div>
                    <button type='submit' className='w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600'>Register</button>
                </form>
                <p className='text-center text-gray-600 mt-4'>
                    Already have an account? <Link to='/Login' className='text-blue-500'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register88;
