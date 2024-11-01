import React from 'react'
import { navBar } from '../constant/navBars'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex items-center gap-[1vw]'>
            {navBar.map(nav => (
                <div className='active:scale-95' key={nav.id}>
                    <NavLink to={nav.path} className="font-semibold px-[1vw] py-[.5vw] rounded text-gray-600 dark:text-white max-md:text-[14px]">{nav.title}</NavLink>
                </div>
            ))}
        </div>
    )
}

export default Navbar
