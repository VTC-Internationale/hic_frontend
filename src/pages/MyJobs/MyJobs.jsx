import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import MyJobCard from './MyJobCard'
const jobs = [
    {
        title: "Civil Engineering",
        duration: "Full-Time",
        date: "sep 30th",
        status: "pending",
        num: "100-200"
    },
    {
        title: "Project Manager",
        duration: "Full-Time",
        date: "sep 30th",
        status: "accepted",
        num: "100-200"
    },
    {
        title: "Civil Enginerring",
        duration: "Full-Time",
        date: "sep 30th",
        status: "rejected",
        num: "100-200"
    }
]


const MyJobs = () => {
    const [notif, setNotif] = useState(false)
  return (
    <div>
        <Header />
        <div className='pt-10 px-12 bg-neutral-100'>
            <div>
                <div className='relative flex justify-between items-center'>
                    <h3 className='text-2xl font-bold'>My Jobs</h3>
                    <div className='flex space-x-2'>
                        <span className='cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg>
                        </span>
                        <div className='relative ' onClick={()=>setNotif(true)}>
                            <span className='cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                                </svg>
                            </span>
                            <div className='absolute top-0 right-0 h-[8px] w-[8px] rounded-full bg-red-500'></div>
                        </div>
                    </div>
                    {notif && <div className='absolute bg-white rounded top-10 z-10 px-4 py-4 right-0 w-[300px] shadow-lg'>
                        <div className='flex justify-end'>
                            <span className='cursor-pointer' onClick={()=>setNotif(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                </svg>
                            </span>
                        </div>
                        <div className='flex justify-between items-center py-2 border-b'>
                            <h4>Notification</h4>
                            <p className='text-sm border-b cursor-pointer'>Mark all as read</p>
                        </div>
                        <div>
                            <Card 
                                title="You have been accepted for an interview"
                                date="Sep 23, 2022 at 09:15am"
                                color="bg-blue-700"
                            />
                            <Card 
                                title="You have been accepted for an interview"
                                date="Sep 23, 2022 at 09:15am"
                                color="bg-green-700"
                            />
                            <Card 
                                title="You have been accepted for an interview"
                                date="Sep 23, 2022 at 09:15am"
                                color="bg-blue-700"
                            />
                        </div>
                    </div>}
                </div>

                <div className='flex my-3'>
                    <h2 className='font-light '>Applied <span className='bg-neutral-100 text-xs py-1 px-2 '>4</span></h2>
                    <h2 className='font-light mx-3'>Interviews <span className='bg-neutral-100 text-xs py-1 px-2 '>4</span></h2>
                    <h2 className='font-light'>Rejected <span className='bg-neutral-100 text-xs py-1 px-2 '>4</span></h2>
                </div>

                <section>
                    {
                        jobs.map(job => (

                            <MyJobCard 
                                data={job}
                            />
                        ))
                    }
                </section>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default MyJobs

function Card({title, date, color}){
    return (
        <div className='flex items-start border-b py-4 space-x-2'>
            <div className='my-1'><div className={`h-[10px] w-[10px] rounded-full ${color}`}></div> </div>
            <div>
                <h5>{title}</h5>
                <p className='text-sm text-gray-500 mt-2'>{date}</p>
            </div>
        </div>
    )
}