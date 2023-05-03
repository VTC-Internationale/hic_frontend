import React from 'react'

const StatusButton = ({children, style}) => {
  return (
    <button className={`px-6 py-2 text-sm rounded ${style}`}>
      {children}
    </button>
  )
}

export default StatusButton