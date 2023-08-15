import React from 'react'
import MusicCard from './MusicCard';
import FocusCard from './FocusCard';
import AudioBookCard from './AudioBookCard';

export default function MainComponent() {
    return (
      <main className="w-full relative top-6 block p-4 py-16 gap-12 flex flex-col justify-between text-text-color">
        <section id="playlists" className="w-full flex flex-col py-2">
          <header>
            <h2>Technically Playlists</h2>
          </header>

          

          <section
            id="playlistContainer"
            className=" w-screen  flex justify-start items-center gap-3  overflow-x-auto no-scrollbar"
          >
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
          </section>
        </section>

        <section id="focus" className="w-full flex flex-col py-2">
          <header>
            <h2>Technically Focus</h2>
          </header>

          <section
            id="focusContainer"
            className=" w-screen flex justify-start items-center gap-3  overflow-x-auto no-scrollbar"
          >
            <FocusCard />
            <FocusCard />
            <FocusCard />
            <FocusCard />
          </section>
        </section>

        <section id="audioBooks" className="w-full  flex flex-col py-2">
          <header>
            <h2>Technically AudioBooks</h2>
          </header>

          <section id="audiobookContainer" className="w-screen  flex gap-3  justify-start items-center overflow-x-auto no-scrollbar">
            <AudioBookCard />
            <AudioBookCard />
            <AudioBookCard />
            <AudioBookCard />
          </section>
        </section>
      </main>
    );
}
