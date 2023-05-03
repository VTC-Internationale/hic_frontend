import React, { useState } from 'react'
const items = [
    {
        title: "Job",
        data: [
            "Civil Engineering",
            "Capenter",
            "Beak Layer",
            "Painter",
        ]
    },
    {
        title: "Language",
        data: [
            "English",
            "French",
        ]
    },
    {
        title: "Availability",
        data: [
            "Now",
            "Tomorrow",
            "Next Week",
            "Next Month",
        ]
    },
    // {
    //     title: "Experience",
    //     data: [
    //         "1 Year",
    //         "2 Year",
    //         "3 Years",
    //         "5+ Years",
    //     ]
    // },
    // {
    //     title: "Payment Frequency",
    //     data: [
    //         "Dayly",
    //         "Weekly",
    //         "2 Week",
    //         "Monthly",
    //     ]
    // },
    // {
    //     title: "Cost",
    //     data: [
    //         "< 10000",
    //         "10K - 20K",
    //         "20K - 30K",
    //         "30K - 100K",
    //     ]
    // },
]

const AdminFilter = () => {
  return (
    <div className=''>
        <form >
            {
                items.map(item=>(
                    <DropDownItem data={item} />
                ))
            }
            
        </form>
    </div>
  )
}

export default AdminFilter

function DropDownItem({data}){
    const [drop, setDrop] = useState(false)
    return(
        <div>
                <div className={`px-2 flex justify-between py-2 border-b ${drop && "shadow-md"}`}>
                    <p className='font-bold'>{data.title}</p>
                    <div className='cursor-pointer' onClick={()=>setDrop(!drop)}>a</div>
                </div>
                { drop &&

                    <div className='font-medium text-sm bg-gray-100'>
                        {
                            data.data.map( text => (
                                <p className='px-2 text-gray-700 py-2 hover:bg-[#38406F] transition-all duration-700 hover:text-white cursor-pointer'>{text}</p>
                            ))
                        }

                    </div>
                }
            </div>
    )
}