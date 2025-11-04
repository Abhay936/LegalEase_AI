import React, { useState } from 'react'

export default function Home() {
  const [tab, setTab] = useState('text')
  const [input, setInput] = useState('')
  const [file, setFile] = useState(null)
  const [summary, setSummary] = useState('')

  const handleSummarize = () => {
    if (tab === 'text' && !input.trim()) {
      setSummary('Please paste some text first.')
      return
    }
    if (tab === 'file' && !file) {
      setSummary('Please upload a file first.')
      return
    }

    // Placeholder for your backend connection
    if (tab === 'text') {
      setSummary('AI summary generated from text input. Connect your backend here.')
    } else if (tab === 'file') {
      setSummary(`File uploaded: ${file.name}. Replace this with your backend file processing.`)
    }
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold">Instant Summaries & Guidance</h1>
        <p className="text-gray-400 mt-3">Paste your article or upload a document to get AI insights in seconds.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-900 rounded-2xl p-4">
          <div className="flex text-sm mb-3 border border-gray-800 rounded-lg overflow-hidden">
            <button onClick={() => setTab('text')} className={`flex-1 px-3 py-2 ${tab==='text' ? 'bg-gray-800' : ''}`}>Text</button>
            <button onClick={() => setTab('file')} className={`flex-1 px-3 py-2 ${tab==='file' ? 'bg-gray-800' : ''}`}>File Upload</button>
          </div>

          {tab === 'text' ? (
            <textarea
              className="w-full h-48 bg-gray-800 p-3 rounded-lg outline-none"
              placeholder="Paste your text here..."
              value={input}
              onChange={e => setInput(e.target.value)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-48 border-2 border-dashed border-gray-700 rounded-lg bg-gray-800 text-gray-400">
              <input
                type="file"
                accept=".txt,.pdf,.docx"
                onChange={handleFileChange}
                className="hidden"
                id="fileInput"
              />
              <label htmlFor="fileInput" className="cursor-pointer bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg">Choose File</label>
              <p className="mt-2 text-sm">{file ? file.name : 'No file selected'}</p>
            </div>
          )}

          <button onClick={handleSummarize} className="w-full mt-4 bg-blue-600 hover:bg-blue-500 py-2 rounded-lg">
            Generate Summary
          </button>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 min-h-48">
          <div className="text-gray-400 whitespace-pre-wrap">{summary || 'Your AI-powered insights will appear here.'}</div>
        </div>
      </div>
    </section>
  )
}