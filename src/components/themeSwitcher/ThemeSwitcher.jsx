import React, { useEffect, useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
const ThemeSwitcher = () => {

    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = (e) => {
        setDarkMode(prev => !prev);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark")
        } else {
            document.body.classList.remove("dark")
        }
    }, [isDarkMode])

    return (
        <DarkModeSwitch
            style={{}}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            className='absolute top-4 right-4 h-8 w-8 sm:h-10 sm:w-10'
        />
    )
}

export default ThemeSwitcher