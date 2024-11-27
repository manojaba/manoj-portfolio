import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Contact from './Contact'
import Entertainment from './Entertainment'
import Home from './Home'
import Landing from './Landing'
import Portfolio from './Portfolio'

function Layout() {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Landing />}>
                    <Route index element={<Home />}></Route>
                    <Route path='/portfolio' element={<Portfolio />}>

                    </Route>
                    <Route path='contact' element={<Contact />}></Route>
                    <Route path='/entertainment' element={<Entertainment />}></Route>
                    <Route path='/cart' element={<Cart />}></Route>

                </Route>
            </Routes>
        </HashRouter>
    )
}

export default Layout