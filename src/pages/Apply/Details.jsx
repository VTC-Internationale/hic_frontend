import React from 'react'
import OutlineButton from '../../components/Buttons/OutlineButton'
import { Link } from 'react-router-dom'

const Details = () => {

  return (
    <section className='py-10 px-10 md:py-20 bg-neutral-100'>
            <div className='flex space-x-6 '>
                <div className='bg-white p-8 w-full'>
                    <div>
                        <h1 className='text-3xl font-bold '>Data Collection Associate - Casual</h1>
                        <p className='py-4'>skills</p>
                        <p className='px-2 py-1 bg-gray-200 text-gray-600 text-sm rounded-md w-max'>blogging</p>

                        <h3 className='my-4'>Job Description</h3>
                        <p className='text-sm'>
                            Zomato is a full stack food tech platform focused on restaurant search, discovery and transactions. Across most of our focus countries,
                             we’re the go to food app for all our users. In the last few years Zomato has also steadily built its transaction business on the back of a strong search and discovery business. 
                            Today Zomato has multiple products and services that ensure our users have a great meal, every time!

                            Over the next few years one of our organizational goals is to build an engine that allows our 
                            users to have access to an affordable assortment of high quality meals to eat out or order from. 
                            We are working towards the idea of a kitchen-less world where-in most people should have access to great and 
                            healthy meals at the same price or cheaper than the cost of preparing them at home. We see cooking as something that people should want to do because it’s a joyous activity instead of being a chore.
                        </p>

                        <h4 className='my-2 text-lg font-bold'>Responsibilities</h4>
                            <div>
                                <li>0–1 years of work experience</li>
                                <li>Must have a valid driver's license and car</li>
                                <li>Flexible and ideally able to work at least 20 hours per week</li>
                            </div>
                    </div>
                </div>
                <div className='bg-white w-[20rem]'>
                    <SideBarItem
                        title="Posted By:"
                        desc="HIC"
                     />
                    <SideBarItem 
                        title="Job Locations"
                        desc="Douala"
                    />
                    <SideBarItem 
                        title="Job Category"
                        desc="Content"
                    />
                    <SideBarItem 
                        title="Skills"
                        desc="Blogging"
                    />
                    <SideBarItem 
                        title="Total Positions"
                        desc="1"
                    />
                    <div className='text-white'>
                        <Link to="/application-form">
                            <OutlineButton style="w-full">
                                Apply
                            </OutlineButton>
                        </Link>
                    </div>
                </div>
            </div>
    </section>
  )
}

function SideBarItem({title, desc}){
    return (
        <div className='border-b p-8'>
            <h6>{title}</h6>
            <p className='text-sm text-gray-700'>{desc}</p>
        </div>
    )
}

export default Details