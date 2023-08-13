import React from 'react'

export default function MainComponent() {
    return (
      <main>
        <section id="playlists">
          <header>
            <h2>Technically Spotify Playlists</h2>
          </header>

          <section id="playlistContainer"></section>
        </section>
        
        <section id="focus">
          <header>
            <h2>Technically Spotify Focus</h2>
          </header>

          <section id="focusContainer"></section>
        </section>

        <section id="audioBooks">
          <header>
            <h2>Technically Spotify AudioBooks</h2>
          </header>

          <section id="audiobookContainer"></section>
        </section>
      </main>
    );
}
