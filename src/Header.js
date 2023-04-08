import React, { useState } from 'react'
import Theme from "./Theme";
import {BsFillMoonFill} from 'react-icons/bs'
import {BsFillSunFill} from 'react-icons/bs'

function Header({handleDarkMode , setColor , darkMode}) {
  const [themes] = useState(["#FFBFA9" , "#FAEDCD" , "#ECF2FF" , "#E5E0FF"])
  return (
    <div className='header'>
        <h1>Notes</h1>  
        <div className='theme-container'>
          {themes.map(theme => <Theme color={theme} setColor={setColor}/>)}
          <button onClick={() => handleDarkMode((prev) => !prev)} className='dark-mode-btn'>
           {darkMode ? <BsFillMoonFill className='moon-icon'/> : <BsFillSunFill className='sun-icon'/>}
          </button>

        </div>

    </div>
  )
}

export default Header