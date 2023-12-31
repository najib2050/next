'use client'
import Link from 'next/link'
import React from 'react'
import style from './page.module.css'
import DarkmodeToggle from '@component/darkmodeToggle/DarkmodeToggle';

const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contacts",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];
const Navebar = () => {
  return (
    <div className={style.container}>
        <Link href='/' className={style.logo}>Najiib</Link>  
        <div className={style.links} >
          <DarkmodeToggle/>
           {links.map((link)=>(
            <Link key={link.id} href={link.url} className={style.link}>{link.title}</Link>
           ))}
        <button
        className={style.logout}
        onClick={()=>{console.log("loged out")}}
        >log out</button>
        </div>
    </div>
  )
}

export default Navebar