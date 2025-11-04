import React from 'react'

const Card = ({title, price, features, cta}) => (
  <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
    <div className="text-xl font-semibold">{title}</div>
    <div className="text-3xl font-bold mt-2">{price}</div>
    <ul className="mt-4 space-y-2 text-gray-300 text-sm">
      {features.map((f,i)=>(<li key={i}>• {f}</li>))}
    </ul>
    <button className="mt-6 w-full bg-blue-600 hover:bg-blue-500 py-2 rounded-lg">{cta}</button>
  </div>
)

export default function Pricing() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">Pricing</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Card title="Free" price="$0" cta="Get Started" features={['Basic summaries', 'Community support', 'Limited history']} />
        <Card title="Pro" price="$9/mo" cta="Upgrade" features={['Long docs', 'Custom styles', 'Priority support']} />
        <Card title="Team" price="$29/mo" cta="Contact Sales" features={['Seats & roles', 'Export & audit', 'SLA support']} />
      </div>
    </section>
  )
}
