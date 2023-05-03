import React from 'react'

const Button = ({children, style}) => {
  return (
    <button className={`px-6 py-2 text-sm border rounded ${style}`}>
      {children}
    </button>
  )
}

export default Button