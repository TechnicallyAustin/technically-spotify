import React from 'react'

export default function Header() {
    return (
        <header className='w-screen h-14 p-4 top-0 left-0 right-0 flex justify-between items-center px-2 block z-40'>
            <div id="logo" className=''>
                <div>Logo</div>
            </div>

            <nav className="flex justify-around items-cener">
                <div id="searchIcon" className='px-2'>
                    <div>SI</div>
                </div>
                <div id="button" className=' w-4/6 rounded-xl px-2'>
                    <button className=' rounded-lg'>Actionable</button>
                </div>
                <div id="menuIcon" className='px-2'>
                    MI
                </div>
            </nav>

        </header>
    )
}
