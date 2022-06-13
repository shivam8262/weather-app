import React from 'react'
import { formatToLocalTime } from '../services/weatherService'

const TimeAndLocation = ({weather: {dt, timezone,  name, country}}) => { 
  return (
      <>
      <div className='flex items-center justify-center my-6'>
          <p className='text-white text-xl font-extralight'>
           {/* Tuesday, 31 May 2022 | local time:12:46 PM */}
           {formatToLocalTime(dt,timezone)}
          </p>
      </div>
      <div className='flex items-center justify-center my-3'>
          <p className='text-white text-3xl font-medium'>{`${name},${country}`}</p>
           </div>
    </>
  )
}

export default TimeAndLocation