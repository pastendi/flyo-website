import React from 'react'
const Hero = () => {
  return (
    <div
      id='hero'
      className='bg-curvy-light dark:bg-curvy-dark bg-no-repeat bg-contain bg-bottom'
    >
      <div className='container mx-auto px-6 text-center md:pt-20 pb-52'>
        <img
          src='https://www.aspiremarketing.group/hubfs/Website/19197004.png'
          alt=''
          className='mx-auto'
        />
        <h1 className='max-w-4xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text-4xl'>
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className='max-w-xs mx-auto mb-10 text-sm  md:text-lg md:max-w-xl'>
          Flyo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends,
          family and co-workers.
        </p>
        <button className='p-3 rounded-full w-52 text-2xl font-semibold bg-accentCyan hover:scale-95'>
          Get started
        </button>
      </div>
    </div>
  )
}

export default Hero
