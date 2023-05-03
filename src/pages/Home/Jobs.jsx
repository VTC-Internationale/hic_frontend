import React from 'react'
import JobCard from '../../components/JobCard'

const Jobs = () => {
  return (
    <section className='py-10 md:py-20 bg-neutral-100'>
        <div className='w-full flex flex-col items-center'>
            <h2 className='text-3xl font-bold py-5'>Job Openings</h2>
            <div className='h-[2px] w-[80px] bg-black my-1'></div>
            <div className='h-[2px] w-[80px] bg-black'></div>
        </div>
        <div className='flex justify-center px-4  md:px-20 mt-12'>

            <div className='w-full grid items-center grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] md:gap-x-8 gap-y-8'>
              
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
            </div>
        </div>
    </section>
  )
}

export default Jobs