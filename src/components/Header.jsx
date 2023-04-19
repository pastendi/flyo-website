import React from 'react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
const Header = ({ theme, toggleTheme }) => {
  return (
    <div className='container mx-auto mt-10 px-6 text-center h-40 md:h-20'>
      <div className='bg-logo-light dark:bg-logo-dark bg-no-repeat h-20 w-48 mx-auto md:mx-0 md:absolute top-10 left-10'></div>
      <div className='flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10'>
        <a href='#features' className='hover:text-accentCyan'>
          Features
        </a>
        <a href='#testimonials' className='hover:text-accentCyan'>
          Testimonials
        </a>
        <button
          className='w-8 h-8 flex items-center justify-center text-gray-500 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none
          border-2 border-gray-300  dark:border-gray-700 rounded-lg text-sm p-25'
          onClick={toggleTheme}
        >
          {theme === 'dark' ? <BsFillSunFill /> : <BsFillMoonFill />}
        </button>
      </div>
    </div>
  )
}

export default Header
