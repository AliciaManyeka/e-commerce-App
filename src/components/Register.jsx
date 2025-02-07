import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {


     const [message , setMessage]= useState("");
  const [email ,setEmail]=useState("")
  const [password ,setPassword]=useState("")
  const [username ,setUsername]=useState("")
  const handleRegister =async (e)=>{
    e.preventDefault()
    const data ={
        username,
      email,
      password
    }
    console.log(data)
}
  return (
    <>
    <section className='h-screen flex items-center justify-center'>
        <div className="max-w-sm shadow bg-white mx-auto p-8">
            <h2 className='text-2xl font-semibold pt-5'> Please Register</h2>
            <form onSubmit={handleRegister} className='space-y-5 max-w-sm mx-auto pt-8'>
              <input type="text"name='username ' id='username' 
              onChange={(e)=>username(e.target.value)}
              placeholder='Username'  required 
              className='w-full bg-gray-100 focus:outline-none p-x5 p-y-3'/>
              <input type="email"name='email ' id='email' 
              onChange={(e)=>setPassword(e.target.value)}
              placeholder='Email Adress'  required 
              className='w-full bg-gray-100 focus:outline-none p-x5 p-y-3'/>

              <input type="password"name='password ' 
              onChange={(e)=>setEmail(e.target.value)}
              id='password' placeholder='Password'  required 
              className='w-full bg-gray-100 focus:outline-none p-x5 p-y-3'/> 
              {
                message && <P className="text-indigo-900">{message}</P>
                
              } 

              <button type='submit' className=' w-full mt-5 bg-indigo-800 hover:bg-indigo-500 font- py-3 rounded-md text-white'>Register</button>           
            </form>

             <p className='my-5 text-sm text-center italic    '>Already have an account? Please<Link to="/login"className='register ml-2 text-red-600 px-1 underline'>LogIn </Link>here </p>
        </div>

    </section>
  
    
    </>
  )
}

export default Register