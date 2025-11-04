import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  const [strength, setStrength] = useState('')

  const onPass = e => {
    const v = e.target.value
    if (v.length < 6) setStrength('Weak')
    else if (/[A-Z]/.test(v) && /[0-9]/.test(v)) setStrength('Strong')
    else setStrength('Medium')
  }

  return (
    <section className="min-h-[70vh] grid place-items-center px-4">
      <form className="bg-gray-900 p-8 rounded-2xl w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-center">Create your account</h1>
        <label className="block mb-3 text-sm">Full Name
          <input className="w-full p-2 mt-1 bg-gray-800 rounded" placeholder="e.g., Jane Doe" />
        </label>
        <label className="block mb-3 text-sm">Email Address
          <input type="email" className="w-full p-2 mt-1 bg-gray-800 rounded" placeholder="you@example.com" />
        </label>
        <label className="block mb-3 text-sm">Password
          <input type="password" className="w-full p-2 mt-1 bg-gray-800 rounded" onChange={onPass} />
          <div className={`mt-1 text-xs ${strength==='Weak'?'text-red-500':strength==='Medium'?'text-yellow-400':'text-green-500'}`}>{strength}</div>
        </label>
        <label className="block mb-6 text-sm">Confirm Password
          <input type="password" className="w-full p-2 mt-1 bg-gray-800 rounded" />
        </label>
        <button type="submit" className="w-full bg-blue-600 py-2 rounded hover:bg-blue-500">Sign up</button>
        <p className="text-center text-sm mt-4 text-gray-400">
          Already have an account? <Link to="/login" className="text-blue-400">Log in</Link>
        </p>
      </form>
    </section>
  )
}
