/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect } from 'react'
import { useLocalStorageState } from '../hooks/useLocalStorageState'

const DarkModeContext = createContext()

function DarkmodeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useLocalStorageState(window.matchMedia("(prefers-color-scheme: dark)").matches, 'isDarkMode')

    function toggleDarkMode() {
        setIsDarkMode((mode) => !mode)
    }

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark-mode')
            document.documentElement.classList.remove('light-mode')
        }
        else {
            document.documentElement.classList.add('light-mode')
            document.documentElement.classList.remove('dark-mode')
        }

    }, [isDarkMode])

    return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
        {children}
    </DarkModeContext.Provider>
}

function useDarkMode() {
    const context = useContext(DarkModeContext)
    if (context === undefined) {
        throw new Error("dark mode context used outside the dark mode provider")
    }
    return context
}

export { DarkmodeProvider, useDarkMode }
