import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { LuScanFace } from "react-icons/lu"
import { HiShoppingCart } from "react-icons/hi2";

const Header = () => {
    return (

        <div className="header-Cl flex justify-between items-center mb-3  text-black border-b-blue-950">
            {/* <Link className="text-xl mr-3 hover:text-yellow-200" to='/Login'>
                logOut
            </Link> */}
            <div className='ml-5'>
            <LuScanFace size={30} className='hover:animate-bounce ml-8 '/> 
            <h2 className='font-semibold '>Virtual stylist</h2>
            </div>
            <div className='flex justify-end'>
            <Link className="flex justify-end text-xl   hover:text-yellow-200" to='/Login'>
                Sign In/Up
            </Link>
            </div>
            <div className='max-w-sm'>
            <Link className="text-xl  hover:text-yellow-200 " to='/Login'>
                <HiShoppingCart size={30} className='text-gray-500'/>
            </Link>
            </div>
        </div>
    )
   
}

export default Header
