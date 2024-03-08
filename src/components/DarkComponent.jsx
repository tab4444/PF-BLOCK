import React, {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

const DarkComponent = () => {
    const {isDarkMode, toggleDarkMode} = useContext(ThemeContext);
  return (
    <div>
        <button onClick={toggleDarkMode}>dark mode</button>
    </div>
  )
}

export default DarkComponent