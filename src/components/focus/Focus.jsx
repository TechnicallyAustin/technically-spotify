import React from 'react'
import FocusCard from './FocusCard';

export default function Focus() {
    return (
      <section id="focus" className="w-full flex flex-col gap-2">
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
