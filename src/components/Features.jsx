import React from 'react'
import { featureList } from '../utils/featureList'
const Features = () => {
  return (
    <div id='features'>
      <div className='container mx-auto px-6 pb-32'>
        <h1 className='text-4xl md:text-5xl font-semibold text-center mb-6 underline'>
          Features
        </h1>
        <div className='grid grid-cols-1 items-center space-y-20 md:grid-cols-2 md:gap-8 md:space-y-0'>
          {featureList.map((item, index) => {
            const { Icon, title, content } = item
            return (
              <div
                className='flex flex-col items-center space-y-2 px-6'
                key={index}
              >
                <div>
                  <Icon className='text-6xl md:text-9xl text-accentCyan' />
                </div>
                <h2 className='text-2xl md:text-3xl text-center font-semibold'>
                  {title}
                </h2>
                <p className='text-md text-center'>{content}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Features
