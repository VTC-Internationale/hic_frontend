import React from 'react'

const JobCard = () => {
  return (
    <a href="/apply" className='bg-white border rounded transition-all duration-500 hover:bg-[#38406F] hover:text-white'>
        <div className=' px-4 py-6 '>
            <div className='flex flex-col justify-between'>
                <div>
                    <h4 className=''>Software Developer</h4>
                    <p className='text-neutral-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, reiciendis? Ipsam facere excepturi reiciendis quidem, voluptas consequatur aliquam explicabo dolorum!</p>
                </div>
                <div className='flex justify-between mt-5 md:mt-10 text-sm'>
                    <div className='flex items-center'>
                        <span className='mr-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                            </svg>
                        </span>
                        <p>Douala, Cameroon</p>
                    </div>
                    <div className='flex items-center'>
                        <p>Engineering</p>
                        <span className='ml-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
                                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </a>
  )
}

export default JobCard