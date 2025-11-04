import React, { useState } from 'react'

export default function Preferences() {
  const [length, setLength] = useState('Detailed')
  const [style, setStyle] = useState('Paragraph')
  const [notify, setNotify] = useState(true)
  const [email, setEmail] = useState(false)

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-semibold mb-6">Preferences</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-900 rounded-2xl p-6 space-y-4">
          <div>
            <div className="text-sm text-gray-400 mb-1">Default Summary Length</div>
            <select value={length} onChange={e => setLength(e.target.value)} className="bg-gray-800 p-2 rounded w-full">
              <option>Detailed</option>
              <option>Brief</option>
              <option>Key Points</option>
            </select>
          </div>
          <div>
            <div className="text-sm text-gray-400 mb-1">Summary Style</div>
            <select value={style} onChange={e => setStyle(e.target.value)} className="bg-gray-800 p-2 rounded w-full">
              <option>Paragraph</option>
              <option>Bullets</option>
            </select>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" checked={notify} onChange={() => setNotify(v=>!v)} />
            <span>Enable Browser Notifications</span>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" checked={email} onChange={() => setEmail(v=>!v)} />
            <span>Product Updates via Email</span>
          </div>
          <button className="mt-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg">Save</button>
        </div>
        <div className="bg-gray-900 rounded-2xl p-6">
          <h3 className="text-xl mb-2 font-semibold">Account</h3>
          <div className="text-gray-400 text-sm">Manage your profile, preferences, and alerts for summaries.</div>
        </div>
      </div>
    </section>
  )
}
