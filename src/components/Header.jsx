import React from 'react'
import { useState } from 'react'
import Button from './Buttons/Button'
import OutlineButton from './Buttons/OutlineButton'
import logo from '../assets/hic.png'
import logo2 from '../assets/hic2.png'

const Header = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(current=> !current)
    }


  return (
    <div className='w-full bg-[#38406F]'>
        <nav className='hidden md:flex items-center py-4 text-white justify-between px-10'>
                <a href="/" >
                    <div className='h-[3rem] w-[10rem]'>
                        <img src={logo} alt="logo" className='h-full w-full object-contain' />
                    </div>
                </a>
                <ul className='flex items-center'>
                    <a href="/" className='py-2 px-2 nav-item'>
                        <li>HOME</li>
                        <div className='h-[2px] transition-all duration-600 w-0 bg-white'></div>
                    </a>
                    <a href="/about" className='py-2 px-2 nav-item'>
                        <li>ABOUT</li>
                        <div className='h-[2px] transition-all duration-600 w-0 bg-white'></div>
                    </a>
                    <a href="/services" className='py-2 px-2 nav-item'>
                        <li>SERVICES</li>
                        <div className='h-[2px] transition-all duration-600 w-0 bg-white'></div>
                    </a>
                    <a href="/my-jobs" className='py-2 px-2 nav-item'>
                        <li>JOBS</li>
                        <div className='h-[2px] transition-all duration-600 w-0 bg-white'></div>
                    </a>
                </ul>

                <div className='flex items-center space-x-2'>
                    
                    <form className=''>
                            <select name="language" className='outline-none bg-transparent'>
                                <option value="EN">EN</option>
                                <option value="FR">FR</option>
                            </select>
                        </form>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                            </svg>
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                            </svg>
                        </span>
                    {/* <a href="/">
                        <OutlineButton>
                            SIGN UP
                        </OutlineButton>
                    </a> */}
                    <a href="/login">
                        <Button>
                            LOGIN
                        </Button>
                    </a>
                    
                </div>
            </nav>
            <nav className={`relative md:hidden flex items-center py-4 text-white justify-between px-4 ${toggle && "bg-white border-b"}`}>
                <div className={`pl-2 ${toggle && "text-[#38406F]"}`}>
                    { toggle && <a href="/">
                        <div className='h-[3rem] w-[10rem]'>
                            <img src={logo2} alt="logo" className='h-full w-full object-contain' />
                        </div>
                    </a>}
                    { !toggle && <a href="/" >
                        <div className='h-[3rem] w-[10rem]'>
                            <img src={logo} alt="logo" className='h-full w-full object-contain' />
                        </div>
                    </a>}
                </div>

                <div className={`absolute w-full z-10 top-20 bg-[#38406F] text-white left-0 transition-all duration-700 ${!toggle? "-translate-y-[30rem]" : ""}`}>
                    <ul className='flex px-8 flex-col pt-4'>
                        <a href="/" className='py-2 px-2 nav-item'>
                            <li>HOME</li>
                            <div className='h-[2px] transition-all duration-600 w-0 bg-white'></div>
                        </a>
                        <a href="/about" className='py-2 px-2 nav-item'>
                            <li>ABOUT</li>
                            <div className='h-[2px] transition-all duration-600 w-0 bg-white'></div>
                        </a>
                        <a href="/services" className='py-2 px-2 nav-item'>
                            <li>SERVICES</li>
                            <div className='h-[2px] transition-all duration-600 w-0 bg-white'></div>
                        </a>
                        <a href="/my-jobs" className='py-2 px-2 nav-item'>
                            <li>JOBS</li>
                            <div className='h-[2px] transition-all duration-600 w-0 bg-white'></div>
                        </a>
                    </ul>

                    <div className='px-9 pb-4'>

                        <div className='flex justify-between pb-2'>
                            <form className=''>
                                <select name="language" className='outline-none bg-transparent'>
                                    <option value="EN">EN</option>
                                    <option value="FR">FR</option>
                                </select>
                            </form>

                            <div className='flex items-center space-x-2'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                    </svg>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <a href='/login' className='w-full'>
                            <Button style='w-full'>
                                LOGIN
                            </Button>
                        </a>
                       
                    </div>
                </div>
                {/* toggle */}
                <div className= {` cursor-pointer font-bold ${toggle? "text-[#38406F]" : "text-white"}`} onClick={handleToggle}>
                    {!toggle &&<div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </div>}
                    {toggle && <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                    </div>}
                </div>
            </nav>
    </div>
  )
}

export default Header