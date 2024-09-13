import React, { useEffect, useState } from 'react'
import ThemeSwitcher from './components/themeSwitcher/ThemeSwitcher'
import iconArrow from './images/icon-arrow.svg'

const App = () => {



  return (
    <div className="min-h-screen bg-stone-200 dark:bg-stone-800 transition-all duration-500">
      <ThemeSwitcher />
      <header className='min-h-60 bg-hero-pattern text-center py-7'>
        <h1 className='text-3xl font-bold text-white capitalize mb-6'>IP Address Tracker</h1>
        <div className='max-w-96 mb-10 mx-auto rounded-xl overflow-hidden flex '>
          <input
            className='px-4 py-3 w-full dark:bg-stone-800 dark:text-white focus:outline-none'
            type="text"
            placeholder='Search for any IP address or domain'

          />
          <button className='bg-stone-800 px-5'>
            <img src={iconArrow} alt="arrow-icon" />
          </button>
        </div>

        <div className='rounded-xl mb-10 bg-white dark:bg-stone-800 dark:text-white p-5 w-full max-w-4xl mx-auto flex justify-between items-center relative'>
          <div className=''>
            <p className='mb-4 font-mono font-extrabold text-left uppercase text-stone-500 text-sm tracking-wider'>IP Address</p>
            <p className='text-2xl font-bold'>8:8:8:8</p>
          </div>
          <div className=''>
            <p className='mb-4 font-mono font-extrabold text-left uppercase text-stone-500 text-sm tracking-wider'>Location</p>
            <p className='text-2xl font-bold'>8:8:8:8</p>
          </div>
          <div className=''>
            <p className='mb-4 font-mono font-extrabold text-left uppercase text-stone-500 text-sm tracking-wider'>Timezone</p>
            <p className='text-2xl font-bold'>8:8:8:8</p>
          </div>
          <div className=''>
            <p className='mb-4 font-mono font-extrabold text-left uppercase text-stone-500 text-sm tracking-wider'>ISP</p>
            <p className='text-2xl font-bold'>8:8:8:8</p>
          </div>
        </div>

      </header>
    </div>
  )
}

export default App
