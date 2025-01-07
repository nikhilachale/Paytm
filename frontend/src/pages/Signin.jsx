import React from 'react'
import Header from '../components/Header'
import SubHeading from '../components/SubHeading'
import Bottom from '../components/Bottom'
import Button from '../components/Button'

function Signin() {
  return (
    <div className='w-full max-w-lg mx-auto bg-white p-10 rounded-lg shadow-lg mt-10'>
        <Header label={"Sign In"}></Header>
        <SubHeading label={"Sign in to your account"}></SubHeading>
        
        <form className="mt-10">
            <div className="mb-6">
                <label  htmlFor="email" className="block w-full text-sm font-medium text-gray-700">
                    Email
                </label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                />
            </div>
           
            <div className="mb-6">
                <label htmlFor="password" className="block w-full text-sm font-medium text-gray-700">
                    Password
                </label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                />
            </div>
            
            <div className="mb-6">
                <Button label={"Sign In"}></Button>
            </div>
        </form>
        <Bottom label={"Don't have an account?"} to={"signup"} text={"Sign up"}>

        </Bottom>
    </div>
  )
}

export default Signin