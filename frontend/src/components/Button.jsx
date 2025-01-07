import React from 'react'

function Button({ label, onClick }) {
  return (
    <div>
      <button 
        type="button" // Changed from submit to button, as form submission will be handled by onClick
        onClick={onClick} 
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {label}
      </button>
    </div>
  )
}

export default Button