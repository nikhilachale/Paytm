import React from 'react'

function User({ username }) {
  return (
    <div className="flex items-center">
      <div className="flex flex-col justify-center h-full mr-4 text-lg text-blue-600">
        {username}
      </div>
      <div className="rounded-full h-12 w-12 bg-blue-100 flex justify-center items-center">
        <div className="text-xl font-semibold text-gray-900">
          {username ? username.charAt(0).toUpperCase() : 'U'}
        </div>
      </div>
    </div>
  )
}

export default User