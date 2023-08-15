import React from 'react'
import Playlist from './components/playlists/Playlist';
import AudioBooks from './components/audioBooks/AudioBooks';
import Focus from './components/focus/Focus';

export default function MainComponent() {
    return (
      <main className="w-full h-screen relative top-0 block p-4 py-12 gap-2  flex flex-col justify-center text-text-color">
        <Playlist />
        <Focus />
        <AudioBooks />
      </main>
    );
}
