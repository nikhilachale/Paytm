import React, { useState } from 'react'
import axios from 'axios'  // Import axios
import Header from '../components/Header'
import SubHeading from '../components/SubHeading'
import Bottom from '../components/Bottom'
import Button from '../components/Button'

function Signup() {
    // State for form fields
    const [username, setUsername] = useState('')
    const [firstName, setFname] = useState('')
    const [lastName, setLname] = useState('')
    const [password, setPass] = useState('')

    const handleSignup = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                username: username,
                firstName: firstName,
                lastName: lastName,
                password: password
            })

            console.log("Signup Response:", response.data)
            localStorage.setItem("token", response.data.token)
            alert("Account Created Successfully!")
        } catch (err) {
            console.error("Signup Error:", err)
            alert("Failed to create account. Please try again.")
        }
    }

    return (
        <div className="w-full max-w-lg mx-auto bg-white p-10 rounded-lg shadow-lg mt-10">
            <Header label={"Sign Up"} />
            <SubHeading label={"Create an account"} />

            <form className="mt-10">
                {/* Email */}
                <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>

                {/* First Name */}
                <div className="mb-6">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFname(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>

                {/* Last Name */}
                <div className="mb-6">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLname(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>

                {/* Password */}
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPass(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="mb-6">
                    <Button label={"Sign up"} onClick={handleSignup} />
                </div>
            </form>

            <Bottom label={"Already have an account?"} to={"signin"} text={"Sign in"} />
        </div>
    )
}

export default Signup