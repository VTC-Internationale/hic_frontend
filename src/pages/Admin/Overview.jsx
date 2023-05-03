import React from 'react'
import AdminFilter from './adminComponents/AdminFilter'
import AdminHeader from './adminComponents/AdminHeader'

const Overview = ({toggle, handleToggle, handleClick}) => {
    
  return (
    <div>
        <AdminHeader toggle={toggle} handleToggle={handleToggle} />

        <div className='px-8'>

            <h1 className='text-xl font-bold py-4'>Dashboard</h1>
            <div className='flex justify-between pb-8 flex-col md:flex-row space-y-4 md:space-y-0'>
                {/* <div className='flex border w-max items-center py-1 px-2 rounded-full space-x-2'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                        </svg>
                    </span>
                    <select name="date" className='outline-none text-sm'>
                        <option value="current">Current Month</option>
                        <option value="last">September</option>
                        <option value="current">August</option>
                    </select>
                </div> */}
                <div className='relative flex justify-center space-x-16 px-4 py-2 rounded border bg-[#38406F] text-white font-light'>
                    <p>Filter best candidate</p>
                    <span className='text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </span>
                    <div className='absolute top-10 right-0 bg-white border text-black z-10 w-full '>
                        <AdminFilter />
                    </div>
                </div>
                <button onClick={handleClick} className='py-2 md:py-1 px-3 rounded-md bg-[#38406F] text-white text-sm'>Create Job</button>
            </div>

            <div className='grid grid-cols-[repeat(auto-fit,_minmax(13rem,_1fr))] gap-4'>
                <OverviewCard 
                    title="Applications"
                    sub="10,500"
                />
                <OverviewCard 
                    title="Interviews"
                    sub="700"
                />
                <OverviewCard 
                    title="Approved applications"
                    sub="500"
                />
                <OverviewCard 
                    title="rejected applications"
                    sub="100"
                />
            </div>
        </div>
    </div>
  )
}

export default Overview

function OverviewCard({title, sub}){
    return (
        <div className='flex flex-col rounded-md px-10 py-4 border justify-center items-center transition-all duration-500 cursor-pointer hover:bg-[#38406F] hover:text-white'>
            <p className='font-light text-sm text-center'>{title}</p>
            <p className='font-bold mt-2'>{sub}</p>
        </div>
    )
}

