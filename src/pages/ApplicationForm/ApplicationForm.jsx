import React from 'react'
import OutlineButton from '../../components/Buttons/OutlineButton'
import logo from '../../assets/hic.png'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


const ApplicationForm = () => {
  return (
    <div>
        <Header />
        <div className='bg-neutral-50'>
            <div>
                <header className='pt-8 px-16 md:px-20'>
                    <div className=''>
                        <h2 className='text-2xl font-bold'>Apply for Civil Engineering</h2>
                    </div>
                </header>
                <section className='py-8 px-16 md:px-20'>

                    <form>
                        <div className='md:flex items-center md:space-x-4 lg:space-x-8'>
                            <div class="mb-6 flex-1">
                                <label htmlFor="name" class="block mb-2 text-sm font-medium">Full name</label>
                                <input type="text" name="name" class="bg-gray-50 border border-gray-300 text-gray-900 placeholder:italic text-sm rounded block w-full p-2.5 px-4" placeholder="Write your full name" />
                            </div>
                            <div class="mb-6 flex-1">
                                <label htmlFor="phone" class="block mb-2 text-sm font-medium">Telephone</label>
                                <input type="number" name="phone" class="bg-gray-50 border border-gray-300 text-gray-900 placeholder:italic text-sm rounded block w-full p-2.5 px-4 " placeholder="Enter your phone number" />
                            </div>
                        </div>
                        <div className='md:flex items-center md:space-x-4 lg:space-x-8'>
                            <div class="mb-6 flex-1">
                                <label htmlFor="email" class="block mb-2 text-sm font-medium">Email </label>
                                <input type="text" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 placeholder:italic text-sm rounded block w-full p-2.5 px-4 " placeholder="Enter your email adress" />
                            </div>


                            <div class="mb-6 flex-1">
                                <label htmlFor="social" class="block mb-2 text-sm font-medium">Social media link </label>
                                <input type="text" name="social" class="bg-gray-50 border border-gray-300 text-gray-900 placeholder:italic text-sm rounded block w-full p-2.5 px-4 " placeholder="Enter your social media link like; twitter, linkedin etc." />
                            </div>
                        </div>

                        <div className='md:flex items-center md:space-x-4 lg:space-x-8'>
                            <div class="mb-6 flex-1">
                                <label htmlFor="main-language" class="block mb-2 text-sm font-medium">Main Language </label>
                                <input type="text" name="main-language" class="bg-gray-50 border border-gray-300 text-gray-900 placeholder:italic text-sm rounded block w-full p-2.5 px-4 " placeholder="Enter main language" />
                            </div>
                            <div class="mb-6 flex-1">
                                <label htmlFor="second-language" class="block mb-2 text-sm font-medium">Second Language</label>
                                <input type="text" name="second-language" class="bg-gray-50 border border-gray-300 text-gray-900 placeholder:italic text-sm rounded block w-full p-2.5 px-4 " placeholder="Enter second language" />
                            </div>
                        </div>


                        <div className=' mb-6'>
                            <label className="block mb-2 text-sm font-medium">Current Adress</label>
                            <div className='flex md:space-x-8 flex-col md:flex-row space-y-6 md:space-y-0'>
                                <div className="flex-1">
                                    <input type="text" name="street" className="bg-gray-50 border border-gray-300 text-gray-900 placeholder:italic text-sm rounded block w-full p-2.5 px-4 " placeholder="Street" />
                                </div>
                                <div className="flex-1">
                                    <input type="text" name="city" className="bg-gray-50 border border-gray-300 text-gray-900 placeholder:italic text-sm rounded block w-full p-2.5 px-4 " placeholder="City" />
                                </div>
                                <div className="flex-1">
                                    <select  name="country" className="bg-gray-50 border border-gray-300 text-gray-900 placeholder:italic text-sm rounded block w-full p-2.5 px-4 " placeholder="Country" >
                                        <option selected>Cameroon</option>
                                        <option value="US">Gabon</option>
                                        <option value="CA">Tchad</option>
                                    </select>
                                </div>
                            </div>

                        </div>

    
                        <div class="mb-6">
                            <label htmlhtmlFor="cv" className='block mb-2 text-sm font-medium' >Upload CV</label>
                            <label
                                className="flex justify-center w-full h-32 px-4 transition bg-white border border-gray-300 rounded-md appearance-none cursor-pointer focus:outline-none">
                                <span className="flex items-center justify-center space-x-2 flex-col">
                                    <div className='flex items-center space-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                        </svg>
                                        <span className="font-light text-gray-400">
                                            Drop files to Attach, or
                                            <span className="hover:text-blue-600 hover:underline"> browse</span>
                                        </span>
                                    </div>
                                    <span className="font-light text-gray-400 block mt-6 text-sm ">
                                        Make sure to upload PDF
                                    </span>
                                </span>
                                <input type="file" name="cv" class="hidden" />
                            </label>
                        </div>

                        <div class="mb-6">
                            <label htmlhtmlFor="passport" className='block mb-2 text-sm font-medium' >Upload ID or Passport</label>
                            <label
                                className="flex justify-center w-full h-32 px-4 transition bg-white border border-gray-300 rounded-md appearance-none cursor-pointer focus:outline-none">
                                <span className="flex items-center justify-center space-x-2 flex-col">
                                    <div className='flex items-center space-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                        </svg>
                                        <span className="font-light text-gray-400">
                                            Drop files to Attach, or
                                            <span className="hover:text-blue-600 hover:underline"> browse</span>
                                        </span>
                                    </div>
                                    <span className="font-light text-gray-400 block mt-6 text-sm ">
                                        Make sure to upload PDF
                                    </span>
                                </span>
                                <input type="file" name="passport" class="hidden" />
                            </label>
                        </div>
                        
                        <div className='md:flex items-center md:space-x-4 lg:space-x-8'>
                            <div class="mb-6 flex-1">
                                <label htmlFor="date" class="block mb-2 text-sm font-medium">Date Available for Interview</label>
                                <input type="date" name="date" class="bg-gray-50 border border-gray-300 text-gray-900 placeholder:italic text-sm rounded block w-full p-2.5 px-4 " />
                            </div>
                            <div class="mb-6 flex-1">
                                {/* <label htmlFor="email" class="block mb-2 text-sm font-medium">Email </label>
                                <input type="text" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 placeholder:italic text-sm rounded block w-full p-2.5 px-4 " placeholder="Enter your email adress" /> */}
                            </div>
                        </div>

                        <OutlineButton style="text-white">
                            Submit Appliction
                        </OutlineButton>
                    </form>

                </section>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default ApplicationForm