import React from 'react'

export default function MainComponent() {
    return (
      <main className="w-full px-4  py-8">
        <section id="playlists" className="w-full flex flex-col gap-2">
          <header>
            <h2>Technically Spotify Playlists</h2>
          </header>

          <section id="playlistContainer" className=" w-full flex gap-4 p-2 overflow-x-auto">

            <article id="musicCard" className="h-40 w-full">
              <figure className="w-full flex">
                <figcaption className="w-full">
                  <p className="w-full p-2">Fig Caption</p>
                </figcaption>
              </figure>
            </article>

          </section>
        </section>

        <section id="focus" className="w-full flex flex-col gap-2">
          <header>
            <h2>Technically Spotify Focus</h2>
          </header>

          <section id="focusContainer" className="flex gap-4 p-2">
            <div className="p-20"></div>
            <div className="p-20"></div>
            <div className="p-20"></div>
          </section>
        </section>

        <section id="audioBooks" className="w-full flex flex-col gap-2">
          <header>
            <h2>Technically Spotify AudioBooks</h2>
          </header>

          <section id="audiobookContainer" className="flex gap-4 p-2">
            <div className="p-20"></div>
            <div className="p-20"></div>
            <div className="p-20"></div>
          </section>
        </section>
      </main>
    );
}
