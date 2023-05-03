import React, { useState } from 'react'
import OutlineButton from '../../components/Buttons/OutlineButton'
import interior from "../../assets/interior.jpeg"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [view, setView ] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        navigate("/")
    }

  return (
     <div className='bg-neutral-100 min-h-screen flex items-center justify-center py-10 px-4 sm:px-8 md:px-10'>

        <div className='w-full flex flex-col items-center'>
            <h2 className='sm:text-xl md:text-3xl text-center mb-4 md:mb-8 uppercase font-bold text-gray-600'>Welcome to HIC</h2>
            
            <div className='bg-white shadow-lg rounded-lg py-5 md:py-8 px-4 md:px-6 w-[80%] flex'>
                <div className='flex-1 md:pr-4'>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-6">
                            <label htmlFor="phone" class="block mb-2 text-sm font-medium text-gray-600">Phone Number</label>
                            <input type="number" required name="phone" class="bg-gray-50 border border-gray-300 placeholder:italic placeholder:text-sm text-gray-900 text-sm rounded block w-full p-2 px-4 outline-none" />
                        </div>
                        <div class="mb-4">
                            <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-600">User password</label>
                            <input type={view? "text" : "password"} required name="password" class="bg-gray-50 border border-gray-300 placeholder:italic placeholder:text-sm text-gray-900 text-sm rounded block w-full p-2 px-4 outline-none"  />
                        </div>
                        <div class="mb-4 flex items-center space-x-2">
                            <input type="checkbox"  name="view" checked={view} onChange={()=>setView(!view)} />
                            <label htmlFor="view" class="block text-sm font-medium text-gray-600">View password</label>
                        </div>
                        <div className='flex justify-end mb-6'>
                            <a href="/fogot-password" className='text-sm italic text-gray-500 hover:text-blue-600 hover:underline'>Forgot Password?</a>
                        </div>

                        <OutlineButton style="text-white w-full">
                            Login
                        </OutlineButton>
                       
                    </form>
                     <div className='text-center w-full font-bold text-gray-500 py-2'>or</div>
                    <button className={`px-6 py-2 text-sm border border-red-500 rounded bg-red-500 w-full text-white my-2`}>
                        Google
                    </button>
                    <div className='flex items-center space-x-2 text-sm text-gray-500 pt-4'>
                        <p>Don't have an account?</p>
                        <a href="/signup" className='text-[#38406f] hover:underline' >Sign Up</a>
                    </div>
                </div>
                <div className='flex-1 px-4 hidden md:inline-block'>
                    <div className='h-full w-full relative'>
                        <img src={interior} alt="sidebar" className='h-full w-full object-cover' />
                        <div className='absolute w-full h-full top-0 bg-[#38406f61]'></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    
  )
}

export default Login