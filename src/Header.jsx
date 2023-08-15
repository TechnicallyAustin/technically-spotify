import React from 'react'
import MenuIcon from './assets/MenuIcon'
import SearchIcon from './assets/SearchIcon'

export default function Header() {
    return (
        <header className='bg-page-color text-text-color shadow-xl w-screen fixed p-4 top-0 left-0 right-0 flex justify-between items-center px-4 z-30'>
            <div id="logo" className='p-2'>
                <div>T. Spotify</div>
            </div>

            <nav className="flex justify-around items-cener">
                <div id="searchIcon" className='p-2 flex justidy-center items-center'>
                    <SearchIcon />
                </div>
                <div id="button" className='flex justify-center items-center w-4/6 rounded-xl p-2 px-4'>
                    <button className='border rounded-lg px-6 py-1'>LI / SU</button>
                </div>
                <div id="menuIcon" className=' flex justify-center items-center p-2'>
                    <MenuIcon />
                </div>
            </nav>

        </header>
    )
}
