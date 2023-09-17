import React from 'react'
import Header from '../../Header';
import Footer from '../../Footer';

export default function SignUp() {
    return (
      <>
        <Header />
        <main className="w-full h-screen relative top-16 p-4  gap-4 py-16 flex flex-col justify-start text-text-color sans">
          <h1 className="w-full text-2xl text-center">
            Local Admin Sign up for Technically Spotify
          </h1>

          <form
            action="/signup"
            method="POST"
            className="w-full flex flex-wrap  gap-2 justify-center items-center p-2"
          >
            <fieldset
              id="firstNameField"
              className="w-5/6 gap-2 flex flex-col "
            >
              <label htmlFor="first_name" name="firstNameLabel">
                First Name:
              </label>
              <input type="text" name="first_name" className="p-2 rounded" />
            </fieldset>

            <fieldset
              id="givenNameField"
              className="w-5/6 gap-2 flex flex-col "
            >
              <label htmlFor="givenNameLabel" name="givenNameLabel">
                Last Name:
              </label>
              <input type="text" name="given_name" className="p-2 rounded" />
            </fieldset>

            <fieldset id="usernameField" className="w-5/6 gap-2 flex flex-col ">
              <label htmlFor="userName" name="usernameLabel">
                Email:
              </label>
              <input type="text" name="username" className="p-2 rounded" />
            </fieldset>

            <fieldset id="passwordField" className="w-5/6 gap-2 flex flex-col">
              <label htmlFor="password" name="passwordLabel">
                Password:
              </label>
              <input type="password" name="password" className="p-2 rounded" />
            </fieldset>

            <button
              type="submit"
              className="p-2 rounded w-5/6 border bg-text-color text-page-color"
            >
              Sign up
            </button>
          </form>
        </main>
        <Footer />
      </>
    );
}
