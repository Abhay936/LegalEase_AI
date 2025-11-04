import React from 'react'

const QA = ({q,a}) => (
  <div className="bg-gray-900 p-4 rounded-xl">
    <div className="font-medium">{q}</div>
    <div className="text-gray-400 text-sm mt-1">{a}</div>
  </div>
)

export default function FAQ() {
  const data = [
    { q: 'How do I get summaries?', a: 'Paste text or enter a URL on the Home page and click Generate Summary.' },
    { q: 'Is there an API connected?', a: 'This template has a placeholder action. Wire it to your backend API.' },
    { q: 'Does it support mobile?', a: 'Yes. The layout is responsive for phones, tablets, and desktops.' },
  ]
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-4">
      <h2 className="text-3xl font-semibold mb-2">FAQ</h2>
      {data.map((x,i)=>(<QA key={i} q={x.q} a={x.a} />))}
    </section>
  )
}
