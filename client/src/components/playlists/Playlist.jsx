import React from 'react'
import MusicCard from './MusicCard';

export default function Playlist() {
    return (
      <section id="playlists" className=" w-full flex flex-col gap-2">
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
