import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'

import Logo from '../components/Template/Logo'
import Nav from '../components/Template/Nav'
import Footer from '../components/Template/Footer'
import Home from '../components/Home/Home'

Sistema.title = "Fin4nce"

// BrowserRouter e ReactStrictMode nog
// react strict mode nog

export default function Sistema() {
    return (    
        <div className="app">
            <Home/>
            <Logo />
            <Nav />
            <Footer />  
        </div>
    )
}