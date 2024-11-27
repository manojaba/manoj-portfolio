import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Landing() {
    return (
        <div >
            <nav className='bg-blue-200 flex justify-evenly'>
                <p>logo</p>
                <NavLink to={'/'} ><p>home</p></NavLink>
                <NavLink to={'/portfolio'} ><p>portfolio</p></NavLink>
                <NavLink to={'/contact'}><p>contact</p></NavLink>

            </nav>
            <Outlet />
        </div>
    )
}

export default Landing