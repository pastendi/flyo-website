import React from 'react'
import { ImQuotesLeft } from 'react-icons/im'
import { testimonials } from '../utils/testimonialList'
const Testimonials = () => {
  return (
    <div id='testimonials' className='bg-gray-50 dark:bg-darkBlue'>
      <div className='container mx-auto px-6 pt-12 pb-40'>
        <h1 className='text-4xl md:text-5xl font-semibold text-center mb-6 underline'>
          Testimonials
        </h1>
        <div className='relative flex flex-col mt-10 lg:mt-20 w-full space-y-6 lg:flex-row lg:space-y-0 lg:space-x-12'>
          <div className='absolute left-1 -top-8 w-10 lg:-top-16 lg:w-20'>
            <ImQuotesLeft className='text-3xl lg:text-6xl text-accentCyan' />
          </div>
          {testimonials.map((x, index) => {
            const { image, text, name, post } = x
            return (
              <div
                className='flex flex-col p-10 space-y-6 rounded-lg bg-gray-200 dark:bg-darkBlue3 lg:w-1/3'
                key={index}
              >
                <p className='text-sm leading-5 lg:text-lg'>{text}</p>
                <div className='flex space-x-4'>
                  <img src={image} alt='' className='w-20 h-20 rounded-full' />
                  <div className='flex flex-col items-start justify-center'>
                    <h5 className='text-sm font-semibold'>{name}</h5>
                    <p className='text-xs font-extralight'>{post}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
