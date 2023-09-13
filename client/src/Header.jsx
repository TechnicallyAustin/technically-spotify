import React, {useState, useEffect} from 'react'
import MenuIcon from './assets/MenuIcon'
import SearchIcon from './assets/SearchIcon'
import ExpandedMenu from './components/ExpandedMenu'
import ExpandSearch from './components/search/ExpandSearch';


export default function Header() {
  const [search, setSearch] = useState(false)
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    console.log("Menu toggle hit");
    setMenu(prevState => !prevState)
  }

  const toggleSearch = () => {
    console.log("Search toggle hit")
    console.log(search)
    setSearch(prevState => !prevState);
  };


    return (
      <header className=" w-full h-16 bg-page-color text-text-color shadow-xl w-screen fixed  top-0 left-0 right-0 flex justify-between items-center px-2 z-30">
        <div id="logo" className="p-2">
          <div>T. Spotify</div>
        </div>

        <nav className="flex justify-between items-cener">
          <div
            id="searchContainer"
            className="p-2 flex justify-center gap-2 items-center"
          >
            <button onClick={toggleSearch}>
              <SearchIcon />
            </button>
              
            {search && <ExpandSearch />}
          </div>

          <div
            id="menuIcon"
            className=" flex justify-center items-center p-2"
            onClick={toggleMenu}
          >
            <MenuIcon />
          </div>
          {menu && <ExpandedMenu toggle={toggleMenu} status={menu} />}
        </nav>
      </header>
    );
}
