import React from 'react'
import FocusCard from './FocusCard';

export default function Focus() {
    return (
      <section id="focus" className="w-full h-1/3 flex flex-col py-2 gap-2">
        <header className='text-page-white'>
          <h2>Technically Focus</h2>
        </header>

        <section
          id="focusContainer"
          className="flex justify-start items-center gap-3  overflow-x-scroll no-scrollbar"
        >
          <FocusCard />
          <FocusCard />
          <FocusCard />
          <FocusCard />
        </section>
      </section>
    );
}
