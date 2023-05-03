import React from 'react'

const OutlineButton = ({children, style}) => {
  return (
    <button className={`px-6 py-2 text-sm border border-[#38406F] rounded bg-[#38406F] ${style}`}>
      {children}
    </button>
  )
}

export default OutlineButton