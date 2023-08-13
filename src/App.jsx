import React from 'react'
import "./App.css"
import Header from './Header'
import MainComponent from './MainComponent'
import Footer from './Footer'

export default function App() {
    return (
        <div id="app" className='w-screen'>
            <Header />
            <MainComponent />
            <Footer />
        </div>
    )
}
