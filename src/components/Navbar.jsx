import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive ? 'bg-gray-800 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-800'
      }`
    }
  >
    {children}
  </NavLink>
)

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-gray-950/70 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg grid place-items-center font-bold">L</div>
            <span className="font-semibold text-lg">LegalEase AI</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/preferences">Preferences</NavItem>
            <NavItem to="/pricing">Pricing</NavItem>
            <NavItem to="/faq">FAQ</NavItem>
            <NavItem to="/about">About</NavItem>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/login" className="px-3 py-2 rounded-md bg-gray-800 text-gray-200 hover:bg-gray-700 text-sm">
              Log in
            </Link>
            <Link to="/signup" className="px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-sm">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
