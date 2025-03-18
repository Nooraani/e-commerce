import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './index.css'
import { toast } from 'react-toastify';
const Register88 = () => {
    const [email, setemail] = useState("");
    const [Name, setName] = useState("");
    const [Password,setpassword]=useState("")
    const [phone, setPhone] = useState("");
    const NaviGAte = useNavigate();

    // let name = localStorage.getItem('Name')
    // ? localStorage.getItem('Name') : Name;
    // let Email = localStorage.getItem('email')
    // ? localStorage.getItem('email') : email;

    //Store Radio button 

   


    



    const HandleSubmit = (e) => {
        e.preventDefault();
        let name = localStorage.getItem('Name')
            ? localStorage.getItem('Name') : localStorage.setItem("Name", Name);
        let Email = localStorage.getItem('email')
            ? localStorage.getItem('email') : localStorage.setItem("email", email);
        let Password1 = localStorage.getItem('Password')
            ? localStorage.getItem('Password') : localStorage.setItem("Password", Password);
        let PhoneNo = localStorage.getItem('phone')
            ? localStorage.getItem('phone') : localStorage.setItem("phone", phone);  
    
      if(Name !=="" && Password !== "" && phone !=="" && email !=="" ){
        if (Name === name  && Email === email) {
            NaviGAte('/Project88')
            toast.success("SuccessFull Register")
        }
      }
       else if(Name ==="" && Password ===""){
        toast.error("please fill all details")
       }
        
        else {
            toast.error("invalid Input")
            console.log("error")
        }

    }
    return (
        <>
        <div className='flex justify-center mt-40'>
            <h2 className='font-bold font-serif'>Register</h2>
        </div>
            <div className='max-w-full flex justify-center  '>
            
                <div className='flex bg-slate-400 justify-center items-center font-bold rounded-xl  relative '>
                    
                    <div className='mt-8 flex mr-12 sm:max-w-sm'>
                        <form onSubmit={HandleSubmit} className='' >
                            <div className='box p-3  relative ml-10' >
                                <div className='InputBox '>
                                    <label className=' hover:text-yellow-100'>UserName</label>
                                    </div>
                                    <input type='text' className='rounded hover:bg-yellow-100 ' placeholder='enter username' value={Name} onChange={e => setName(e.target.value)} />

                                
                                <div className='InputBox mt-2'>
                                    <label className='mr-14 hover:text-yellow-100'>Email</label>
                                    </div>
                                    <input type='email' className='rounded hover:bg-yellow-100 ' placeholder='enter email address' value={email} onChange={e => setemail(e.target.value)} />

                                
                                <div className='InputBox mt-2'>
                                    <label className='mr-4 hover:text-yellow-100'>Phone No </label>
                                    </div>
                                    <input type='number' className='rounded hover:bg-yellow-100 ' placeholder='enter Phone No' value={phone} onChange={e => setPhone(e.target.value)} />

                                
                                <div className='InputBox' >
                                    <label className='mr-5 mt-2 hover:text-yellow-100 '>Password </label>
                                    </div>
                                    <input type='pasword' className='mt-1 rounded hover:bg-yellow-100' placeholder='enter password' value={Password} onChange={e => setpassword(e.target.value)} />

                        

                                <div className='flex  mt-3 mx-16'>
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

export default Register88
