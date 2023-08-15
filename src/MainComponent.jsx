import React from 'react'
import Playlist from './components/playlists/Playlist';
import AudioBooks from './components/audioBooks/AudioBooks';
import Focus from './components/focus/Focus';

export default function MainComponent() {
    return (
      <main className="w-full h-screen relative top-4 block p-4 py-12 flex flex-col justify-around text-text-color">
        <Playlist />
        <Focus />
        <AudioBooks />
      </main>
    );
}
