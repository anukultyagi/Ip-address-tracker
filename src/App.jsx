import React from 'react'
import ThemeSwitcher from './components/themeSwitcher/ThemeSwitcher'

const App = () => {
  return (
    <div className="min-h-screen bg-stone-200 dark:bg-stone-800 transition-all duration-500">

      <ThemeSwitcher />

    </div>
  )
}

export default App