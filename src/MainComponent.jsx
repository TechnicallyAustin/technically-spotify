import React from 'react'
import Playlist from './components/playlists/Playlist';
import AudioBooks from './components/audioBooks/AudioBooks';
import Focus from './components/focus/Focus';

export default function MainComponent() {
    return (
      <main className="w-full relative top-8 block p-4  gap-4 py-16 flex flex-col justify-around text-text-color">
        <Playlist />
        <Focus />
        <AudioBooks />
      </main>
    );
}
