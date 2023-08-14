import React from 'react'
import MusicCard from './MusicCard';
import FocusCard from './FocusCard';
import AudioBookCard from './AudioBookCard';

export default function MainComponent() {
    return (
      <main className="w-full relative top-6 block p-4 py-16 gap-4 flex flex-col justify-between text-text-color">
        <section id="playlists" className="w-full flex flex-col py-2">
          <header>
            <h2>Technically Playlists</h2>
          </header>

          

          <section
            id="playlistContainer"
            className=" w-screen h-48  flex justify-start gap-3 py-4 overflow-x-scroll no-scrollbar"
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
            className=" w-screen h-48 flex justify-start gap-3 p-2 py-4 overflow-x-scroll no-scrollbar"
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

          <section id="audiobookContainer" className="w-screen h-48 flex gap-3 py-4 justify-start overflow-x-scroll no-scrollbar">
            <AudioBookCard />
            <AudioBookCard />
            <AudioBookCard />
            <AudioBookCard />
          </section>
        </section>
      </main>
    );
}
