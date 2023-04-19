import React, { useEffect, useState } from 'react'
import useLocalStorage from 'use-local-storage'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }
  useEffect(() => {
    const bodyClass = document.documentElement.classList
    theme === 'dark' ? bodyClass.add('dark') : bodyClass.remove('dark')
  }, [theme])
  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Features />
      <Testimonials />
    </div>
  )
}

export default App
