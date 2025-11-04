import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8 text-sm text-gray-300">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 bg-blue-600 rounded-lg grid place-items-center font-bold">L</div>
            <span className="font-semibold">LegalEase AI</span>
          </div>
          <p className="text-gray-400">AI summaries and insights for legal and general documents. Fast, private, and helpful.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="text-white font-medium">Product</div>
            <Link to="/" className="block hover:text-white">Home</Link>
            <Link to="/pricing" className="block hover:text-white">Pricing</Link>
            <Link to="/faq" className="block hover:text-white">FAQ</Link>
          </div>
          <div className="space-y-2">
            <div className="text-white font-medium">Company</div>
            <Link to="/about" className="block hover:text-white">About</Link>
            <a href="mailto:support@example.com" className="block hover:text-white">Support</a>
            <a href="#" className="block hover:text-white">Terms</a>
          </div>
        </div>
        <div className="text-gray-400">© {new Date().getFullYear()} LegalEase AI. All rights reserved.</div>
      </div>
    </footer>
  )
}
