import React from 'react'
import "./DarkModeToggle.css"

const DarkModeToggle = ({isDarkTheme, setDarkTheme}) => {
  return (
        <label className="switch">
            <input type="checkbox" defaultChecked={!isDarkTheme} onChange={()=>(setDarkTheme(!isDarkTheme))}/>
                <span className="slider"></span>
            </label>
  )
}
export default DarkModeToggle;
