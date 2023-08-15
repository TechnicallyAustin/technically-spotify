import React from 'react'
import MusicCard from './MusicCard';

export default function Playlist() {
    return (
      <section id="playlists" className=" h-1/3 w-full flex flex-col py-2 gap-2">
        <header className='text-page-white'>
          <h2>Technically Playlists</h2>
        </header>

        <section
          id="playlistContainer"
          className="flex justify-start items-center gap-3  overflow-x-scroll no-scrollbar"
        >
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
        </section>
      </section>
    );
}
