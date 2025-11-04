import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <section className="min-h-[70vh] grid place-items-center px-4">
      <form className="bg-gray-900 p-8 rounded-2xl w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-center">Welcome back</h1>
        <label className="block mb-3 text-sm">Email Address
          <input type="email" className="w-full p-2 mt-1 bg-gray-800 rounded" placeholder="you@example.com" />
        </label>
        <label className="block mb-6 text-sm">Password
          <input type="password" className="w-full p-2 mt-1 bg-gray-800 rounded" />
        </label>
        <button type="submit" className="w-full bg-blue-600 py-2 rounded hover:bg-blue-500">Log in</button>
        <p className="text-center text-sm mt-4 text-gray-400">
          New here? <Link to="/signup" className="text-blue-400">Create an account</Link>
        </p>
      </form>
    </section>
  )
}
