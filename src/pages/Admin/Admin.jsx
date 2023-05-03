import React, { useState } from 'react'
import CreateJob from './CreateJob'
import Job from './Job'
import ManageJobs from './ManageJobs'

import Overview from './Overview'
import SideBar from './SideBar'

const Admin = () => {
    const [page, setPage] = useState("overview")
    const [toggle, setToggle] = useState(false)
    const handleToggle = ()=>{
        setToggle(current => !toggle)
    }
  return (
    <div>
        <section className='flex'>
            <SideBar 
                toggle={toggle}
            />
            <div className='flex-auto bg-neutral-50 h-screen overflow-y-auto'>

                {
                    getPage(page, toggle, handleToggle, setPage)
                }
                
                
            </div>
        </section>
    </div>
  )
}

export default Admin

function getPage(page, toggle, handleToggle, setPage){
    switch (page) {
        case "overview":
            return (
                <Overview 
                toggle={toggle}
                handleToggle={handleToggle}
                handleClick={()=> setPage('createjob')}
                />
            )
    
        case "createjob":
            return (
                <CreateJob 
                    toggle={toggle}
                    handleToggle={handleToggle}
                />
            )
    
        case "managejobs":
            return (
                <ManageJobs 
                    toggle={toggle}
                    handleToggle={handleToggle}
                />
            )
    
        case "job":
            return (
                <Job 
                    toggle={toggle}
                    handleToggle={handleToggle}
                />
            )
    
        default:
            return (
                <Overview 
                toggle={toggle}
                handleToggle={handleToggle}
                />
            )
    }
}