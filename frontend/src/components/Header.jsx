import React from 'react'

function Header({label}) {
  return (
    <div>
        <h1 className='bold bg-white text-blue-600 text-center text-4xl'>{label}</h1>
      
    </div>
  )
}

export default Header
