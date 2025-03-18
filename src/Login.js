import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [Name,setName]=useState("");
  const [Password,setpassword]=useState("");
  const NaviGAte=useNavigate()
  const HandleSubmit=(e)=>{
    e.preventDefault()
    let UserName=localStorage.getItem('Name');
    let password=localStorage.getItem('Password');
    if(UserName === Name && password === Password){
      console.log("successfully")

      NaviGAte('/Project88')
      toast.success("login SuccessFull")
    }
    else{
      toast.error("userName And Password doesn't match please try Again ! ")
    }
  }
  return (
    <>
        <div className='max-w-full flex justify-center mt-40 '>
                <div className='flex bg-slate-400 justify-center items-center font-bold rounded-xl  '>
                    <div className='mt-8 '>
                        <form onSubmit={HandleSubmit} >
                            <div className='box p-3' >
                              <div className='ml-28 relative'>
                                <div className='InputBox '>
                                    <label className=' hover:text-yellow-100'>UserName</label>
                                    </div>
                                    <input type='text' className='rounded  hover:bg-yellow-100' placeholder='enter username' value={Name} onChange={e => setName(e.target.value)} />

                                    </div>
                                <div className='ml-28'>
                                <div className='InputBox' >
                                    <label className='mr-5 hover:text-yellow-100 '>Password </label>
                                    </div>
                                    <input type='pasword' className=' rounded hover:bg-yellow-100' placeholder='enter password' value={Password} onChange={e => setpassword(e.target.value)} />

                                    </div>
                                <Link to='/' className='text-blue-800 font-light ml-40 underline mt-3'>Forget username & password</Link>
                                <div className='flex  mt-3 mx-40 '>
                                    <button type='submit' className='max-w-md bg-yellow-300 px-4 rounded-xl'>login</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div> 
    </>
  )
}

export default Login
