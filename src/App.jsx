import React from 'react'
import "./App.css"
import Header from './components/Header'
import MainComponent from './components/MainComponent'
import Footer from './components/Footer'

export default function App() {
    return (
        <div id="app">
            <Header />
            <MainComponent />
            <Footer />
        </div>
    )
}
