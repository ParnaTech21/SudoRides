import React from 'react'

export default function DriverCard({ driver }) {
  return (
    <div className="border p-4 rounded flex gap-4 items-center">
      <div>
        <div className="font-bold text-lg">{driver.name}</div>
        <div className="text-gray-500">{driver.carModel} · {driver.carNumber}</div>
        <div className="text-yellow-500">Rating: {driver.rating}/5</div>
      </div>
      <div className="ml-auto">
        {driver.isAvailable
          ? <span className="text-green-600 font-semibold">Available</span>
          : <span className="text-red-600 font-semibold">Unavailable</span>
        }
      </div>
    </div>
  )
}