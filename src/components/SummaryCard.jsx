import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SummaryCard({ title, value, icon }) {
  return (
    <div className='bg-white shadow-md rounded-lg p-4'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col gap-y-1'>
          <p className='text-2xl font-bold text-black'>{value}</p>
          <p className='text-sm text-gray-500'>{title}</p>
        </div>
        <FontAwesomeIcon icon={icon} className='text-4xl md:text-5xl' />
      </div>
    </div>
  )
}

export default SummaryCard
