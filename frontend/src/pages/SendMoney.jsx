import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';  // Import useSearchParams
import axios from 'axios';  // Import axios
import Button from '../components/Button'


function SendMoney() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState('')
  const [username, setUsername] = useState('')  // Add state for username

  const handleSend = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3000/api/v1/account/transfer", {
      to: id,
      amount
    }, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
    .then(() => {
      alert(`Sending $${amount} to ${name}`)
    })
    .catch(err => {
      console.error("Error sending money:", err)
      alert("Failed to send money. Please try again.")
    })
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Send Money</h2>
      <form onSubmit={handleSend}>
        {/* Username Field */}
        <div className="flex items-center mb-6">
          <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center items-center mr-4">
            <div className="text-xl font-semibold text-gray-700">
              {name ? name.charAt(0).toUpperCase() : 'U'}
            </div>
          </div>
          <div className="text-2xl font-sans font-medium">
          {name}
          </div>
       
          
        </div>

        {/* Amount Field */}
        <div className="mb-6">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Send Button */}
        <Button label="Send" onClick={handleSend} />
      </form>
    </div>
  )
}

export default SendMoney