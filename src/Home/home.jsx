import React from 'react'
import NavBar from './navbar.jsx'
import Hero from './hero.jsx'
import About from '../About/About.jsx';


export default function home(){
    return(
        <>
            <NavBar />
            <Hero />
            <About />
        </>
    )
}