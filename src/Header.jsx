import React, {useState, useEffect} from 'react'
import MenuIcon from './assets/MenuIcon'
import SearchIcon from './assets/SearchIcon'
import ExpandedMenu from './components/ExpandedMenu'


export default function Header() {
         const [state, setState] = useState({
           menu: {
             isClicked: false,
           },
         });

         const MenuToggle = () => {
           setState((prevState) => ({
             menu: {
               isClicked: !prevState.menu.isClicked,
             },
           }));
         };

         useEffect(() => {
           console.log("effect hook", state.menu.isClicked);
         }, [state.menu.isClicked]);
    return (
        <header className='bg-page-color text-text-color shadow-xl w-screen fixed  top-0 left-0 right-0 flex justify-between items-center px-4 z-30'>
            <div id="logo" className='p-2'>
                <div>T. Spotify</div>
            </div>

            <nav className="flex justify-around items-cener">
                <div id="searchIcon" className='p-2 flex justidy-center items-center'>
                    <SearchIcon />
                </div>
                <div id="button" className='flex justify-center items-center w-4/6 rounded-xl p-2 px-4'>
                    <button className='border bg-text-color text-page-color rounded-2xl px-6 py-2 text-sm'>OPEN APP</button>
                </div>
                <div id="menuIcon" className=' flex justify-center items-center p-2' onClick={MenuToggle}>
                    <MenuIcon />
                </div>
                {state.menu.isClicked && <ExpandedMenu toggle={MenuToggle} status={state.menu.isClicked} />}
            </nav>

        </header>
    )
}
