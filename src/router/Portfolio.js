import React from 'react'
import { NavLink } from 'react-router-dom'

function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <NavLink to='/entertainment'><div className='w-36 h-36 border border-red-500'><p>entertainment</p></div></NavLink>
            <NavLink to='/cart'><div className='w-36 h-36 border border-red-500'><p>cart</p></div></NavLink>





        </div>


    )
}

export default Portfolio