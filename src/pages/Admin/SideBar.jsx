import React, { useState } from 'react'
import logo from '../../assets/hic.png'
import small from '../../assets/ICON.png'

const SideBar = ({toggle}) => {
    const [mouseOver, setMouseOver] = useState(false)

  return (
    <>
        {!toggle && <div className=' relative bg-[#38406F] w-[15rem] overflow-y-auto h-screen text-white py-8'>
            
            <div className='flex justify-center'>

                <div className='h-[3rem] w-[8rem] md:w-[10rem] flex justify-start'>
                    <img src={logo} alt="logo" className='h-full w-full object-contain md:-ml-8' />
                </div>
            </div>

            <div className='mt-4 flex flex-col justify-between'>
                <ul className=''>
                    <li className='flex items-center space-x-2 my-4 bg-gray-500 px-2 py-4 md:px-5 cursor-pointer'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid-1x2-fill" viewBox="0 0 16 16">
                                <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5z"/>
                            </svg>
                        </span>
                        <span className='text-sm' >Dashboard</span>
                    </li>
                    <li className='flex items-center space-x-2 my-4 px-2 md:px-5 cursor-pointer'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark" viewBox="0 0 16 16">
                                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                            </svg>
                        </span>
                        <span className='text-sm'>Jobs</span>
                    </li>
                </ul>

                <button className='absolute bottom-12 left-2 md:left-4 flex items-center text-xs space-x-2 font-light px-2'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                            <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                        </svg>
                    </span>
                    <p>LOGOUT</p>
                </button>
            </div>
        </div>}


        {toggle && <div className={`relative bg-[#38406F] overflow-y-auto h-screen text-white py-7 transition-all duration-700 w-[3rem] side-bar`} >
             
            <div className='flex w-full justify-center logo1'>
                <div className='flex justify-center w-[2rem]'>
                    <img src={small} alt="logo" className='h-full w-full object-contain' />
                </div>
            </div>
            

            
            <div className='hidden justify-center logo2'>
                <div className='h-[3rem] w-[8rem] flex justify-start'>
                    <img src={logo} alt="logo" className='h-full w-full object-contain -ml-4' />
                </div>
            </div>
           
            

            <div className='mt-8 flex flex-col justify-between '>
                <ul className=''>
                    
                    <li className='flex items-center py-4 cursor-pointer w-full px-4 bg-gray-500 space-x-3'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid-1x2-fill" viewBox="0 0 16 16">
                                <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5z"/>
                            </svg>
                        </span> 
                        <span className='hidden nav-item transition-all duration-700 text-sm'>Dashboard</span>
                    </li>
                    <li className='flex items-center py-4 cursor-pointer px-4 space-x-3'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark" viewBox="0 0 16 16">
                                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                            </svg>
                        </span>
                         <span className='hidden nav-item transition-all duration-700 text-sm'>Jobs</span>
                    </li>
                </ul>

                <button className='absolute bottom-12 left-1 flex items-center text-xs space-x-2 font-light px-4'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                            <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                        </svg>
                    </span>
                    <p className='hidden nav-item transition-all duration-700'>LOGOUT</p>
                </button>
            </div>
        </div>}
    </>
  )
}

export default SideBar