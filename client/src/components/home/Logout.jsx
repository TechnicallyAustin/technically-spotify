import React from 'react'
import Header from '../../Header';
import Footer from '../../Footer';

export default function Logout() {
    return (
      <>
        <Header />
        <main className="w-full h-screen relative top-16 p-4  gap-4 py-16 flex flex-col justify-start text-text-color sans">
          <h1 className="w-full text-2xl text-center">
            Logout of Technically Spotify
          </h1>

          <form
            action="/logout"
            method="POST"
            className="w-full flex flex-wrap  gap-2 justify-center items-center p-2"
          >

            <button
              type="submit"
              className="p-2 rounded w-5/6 border bg-text-color text-page-color"
            >
              Logout
            </button>
          </form>
        </main>
        <Footer />
      </>
    );
}
