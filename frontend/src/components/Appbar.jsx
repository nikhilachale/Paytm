import React from 'react'
import User from './User'

function Appbar() {
  return (
    <div>
        <div className=" flex justify-between  p-6 shadow-lg bg-white rounded-sm">
       
       <div > 
        <h1 className="bg-white font-medium text-2xl">
            Paytm Payment
        </h1>
        </div>

        <div className="user">
            <User username="User" />
        </div>
        


        </div>
      
    </div>
  )
}

export default Appbar
