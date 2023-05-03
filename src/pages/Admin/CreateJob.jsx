import React from 'react'
import OutlineButton from '../../components/Buttons/OutlineButton'

const CreateJob = ({toggle, handleToggle}) => {
  return (
    <div>
        <header className='px-8 py-4 md:py-8 lg:py-10 border-b flex items-center justify-between'>
            <span className='md:hidden cursor-pointer' onClick={handleToggle}>
                {!toggle && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>}
                {toggle &&<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>}
            </span>
            <h1 className='text-xl font-bold'>Create Job</h1>
            <div className='flex items-center space-x-2'>
                <button className='py-2 md:py-1 px-3 rounded-md bg-[#38406F] border border-[#38406F] text-white text-sm flex items-center space-x-2'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                        </svg>
                    </span>
                    <p>share</p>
                </button>
                <button className='py-2 md:py-1 px-4 rounded-md text-[#38406F] border border-[#38406F] text-sm'>Draft</button>
            </div>
        </header>


        <div className='px-8 py-8'>
            <div className=''>
                <form>
                    <div class="mb-6">
                        <label htmlFor="job_title" className="block mb-2 text-sm font-medium">Job Title</label>
                        <input type="text" name="job_title" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full p-2.5 px-4 outline-none" placeholder="Enter job title" />
                    </div>
                    <div class="mb-6">
                        <label htmlFor="department" className="block mb-2 text-sm font-medium">Department</label>
                        <input type="department" name="department" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full p-2.5 px-4 outline-none " placeholder="Enter department" />
                    </div>
                    <div class="mb-6">
                        <label htmlFor="description" className="block mb-2 text-sm font-medium">Job Description</label>
                        <textarea name="description" rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 px-4 outline-none " placeholder="Enter job description"></textarea>
                    </div>
                    <div class="mb-6">
                        <label htmlFor="duties" className="block mb-2 text-sm font-medium">Duties</label>
                        <textarea name="duties" rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 px-4 outline-none " placeholder="Enter job duties"></textarea>
                    </div>
                    <div class="mb-6">
                        <label htmlFor="requirement" className="block mb-2 text-sm font-medium">Requirements</label>
                        <textarea name="requirement" rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 px-4 outline-none " placeholder="Enter job requirements"></textarea>
                    </div>
                    <div class="mb-6">
                        <label htmlFor="benefit" className="block mb-2 text-sm font-medium">Benefits</label>
                        <textarea name="benefit" rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 px-4 outline-none " placeholder="Enter job benefits"></textarea>
                    </div>
                    

                    <OutlineButton style="text-white">
                        Publish
                    </OutlineButton>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CreateJob