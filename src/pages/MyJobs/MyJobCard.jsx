import React from 'react'
import StatusButton from '../../components/Buttons/StatusButton'

const MyJobCard = ({data}) => {
  return (
    <div className='w-full border-b py-8'>
        <div>
            <div className='flex justify-between'>
                <h2 className='text-xl font-bold'>{data.title}</h2>
                {data.status === "pending"? <StatusButton style="text-white bg-blue-500">
                    Pending
                </StatusButton>: null}
                {data.status === "accepted"? <StatusButton style="text-white bg-green-500">
                    Accepted for Interview
                </StatusButton> : null}
               {data.status === "rejected"? <StatusButton style="text-white bg-red-500">
                    Rejected
                </StatusButton> : null}
            </div>
            <h6 className='text-sm py-2'>{data.duration}</h6>
            <p className='text-sm text-gray-400 pb-4'>Applied on {data.date}</p>
            {data.status === "pending" ?<p className='text-gray-500'>You will get a status update within 14days</p>: null}
            <p className='text-gray-500'>Around {data.num} people applied for this role</p>
        </div>
    </div>
  )
}

export default MyJobCard