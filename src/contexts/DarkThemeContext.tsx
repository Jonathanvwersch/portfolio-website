import React, { createContext, useContext } from "react"
import { useLocalStorage } from "../utils/hooks/useLocalStorage"

const DarkThemeContext = createContext<{
  isDarkMode: boolean
  toggleDarkMode: () => void
}>({
  isDarkMode: true,
  toggleDarkMode: undefined,
})

const DarkThemeProvider = ({ children }) => {
  const { value, setValue } = useLocalStorage(true, "dark-theme")
  const toggleFunction = () => {
    setValue(prevState => !prevState)
  }
  console.log(value)

  return (
    <DarkThemeContext.Provider
      value={{ isDarkMode: value, toggleDarkMode: toggleFunction }}
    >
      {children}
    </DarkThemeContext.Provider>
  )
}

const useDarkThemeContext = () => useContext(DarkThemeContext)

export { DarkThemeContext, DarkThemeProvider, useDarkThemeContext }