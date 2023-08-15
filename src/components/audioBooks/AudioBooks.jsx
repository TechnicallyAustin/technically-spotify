import React from 'react'
import AudioBookCard from './AudioBookCard';

export default function AudioBooks() {
    return (
      <section id="audioBooks" className="w-full h-1/3  flex flex-col py-2 gap-2">
        <header className='text-page-white'>
          <h2>Technically AudioBooks</h2>
        </header>

        <section
          id="audiobookContainer"
          className="flex gap-3  justify-start items-center overflow-x-auto no-scrollbar"
        >
          <AudioBookCard />
          <AudioBookCard />
          <AudioBookCard />
          <AudioBookCard />
        </section>
      </section>
    );
}
