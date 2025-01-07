import React from 'react'
import { Link } from 'react-router-dom'

function Bottom({ label, to, text }) {
  return (
    <div className="text-sm font-thin underline text-center mt-4">
      <div>{label}</div>
      <Link to={`/${to}`} className="text-blue-500 hover:text-blue-700">
        {text}
      </Link>
    </div>
  )
}

export default Bottom