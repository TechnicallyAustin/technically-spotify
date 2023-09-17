import React from 'react'
import Header from '../../Header';
import Footer from '../../Footer';

export default function Login() {
    return (
      <>
      <Header />
      <main className="w-full h-screen relative top-16 p-4  gap-4 py-16 flex flex-col justify-start text-text-color sans">
            <h1 className='w-full text-2xl text-center'>Login to Technically Spotify</h1>

        <section className=''>
            <form action="/login" method="POST" className='w-full flex flex-wrap  gap-2 justify-center items-center p-2'>
                <fieldset id="usernameField" className='w-5/6 gap-2 flex flex-col '>
                  <label htmlFor="userName" name="usernameLabel">
                    Username:
                  </label>
                  <input required={true} type="text" name="username" className="p-2 rounded" />
                </fieldset>

                <fieldset id="usernameField" className='w-5/6 gap-2 flex flex-col'>
                  <label htmlFor="userName" name="usernameLabel">
                    Password:
                  </label>
                  <input required={true} type="password" name="password" className="p-2 rounded" />
                </fieldset>

                <button type="submit" className='p-2 rounded w-5/6 border bg-text-color text-page-color'>
                Login
                </button>
            </form>
        </section>

        { /* <section id='spotifyLogin' className='w-full h-1/4 bg-black'>
            <h2>Login with Spotify</h2>

    </section> */}



        
      </main>
      <Footer />
      </>
    );
}
