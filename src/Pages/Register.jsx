import React from 'react'
import { Link } from 'react-router'

const Register = () => {
  return (
    <div className='h-screen relative'>
        <div className="absolute w-[1px] h-[20vh] rounded-full bg-[#999999] top-0 left-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className='h-[100vh] w-[100vw] flex flex-col items-center justify-center'>
            <div className='h-[20vh]'>
                <img className='object-cover h-[20vh]' src="/Rentora.jpg" />
            </div>
            <div className='h-[50vh] md:pt-16'>
              <form className='flex flex-col items-center justify-center h-full gap-4 px-10 py-5'>
                <h1 className='text-xl font-light pb-2'>Create account</h1>
                <input className='border-[1px] border-[#D6D6D6] px-4 py-3 w-[70vw] md:w-[550px]' type="text" placeholder='Name'/>
                <input className='border-[1px] border-[#D6D6D6] px-4 py-3 w-[70vw] md:w-[550px]' type="text" placeholder='Email'/>
                <input className='border-[1px] border-[#D6D6D6] px-4 py-3 w-[70vw] md:w-[550px]' type="password" placeholder='Password'/>
                <button type='submit' className='text-white bg-[#242424] hover:bg-[#000000] px-6 py-3'>Create</button>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Register