import React from 'react'
import NavBar from '../../components/NavBar'
import house from '../../assets/house.jpeg'
import Details from './Details'
import Footer from '../../components/Footer'

const Apply = () => {
  return (
    <div>
      <div className='relative w-full h-[50vh]'>
          <div className='absolute top-0 w-full h-full'>
              <img src={house} alt="bg" className='w-full h-full object-cover'/>
          </div>
        <div className='absolute top-0 bg-black/40 w-full h-full flex justify-center items-center'>
          <div className='flex flex-col items-center justify-center px-2'>
            <h1 className='text-white font-bold text-3xl text-center'>Home Improvement & <span className=''>Construction</span> </h1>
            {/* <p className='text-gray-200 py-4 text-center' >
              🇨🇲 Get a bungalow in two months at the cheapest cost.
            </p> */}
            {/* <div className='flex items-center bg-white px-2 rounded-full mt-4 w-full'>
              <input type="text" className='w-full py-2 pl-2  outline-none bg-transparent' placeholder='search job'/>
              <span className='px-2 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </span>
            </div> */}
          </div>
        </div>
        <div className='absolute top-0 w-full'>
          <NavBar />
        </div>
      </div>
      <Details />
      <Footer />
    </div>
  )
}

export default Apply