"use client"
import { useContext } from 'react'
import style from './darkmodeToggle.module.css'
import { ThemeContext } from '../../../ThemProvider';



const DarkmodeToggle = () => {
    const { toggle,mode } = useContext(ThemeContext);
  
  return (
    <div className={style.container} onClick={toggle}>
        <div className={style.icon} >Dark</div>
        <div className={style.icon}>Light</div>
        <div className={style.ball} style={mode==="dark" ?{left:"2px"}:{right:"2px"}}/>
    </div>
  )
}

export default DarkmodeToggle