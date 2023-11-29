import React, {useState, useEffect} from 'react'
import MusicCard from './MusicCard';
import  axios  from 'axios';

export default function Playlist() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);

  const getPlaylists = async => {
    try{
      const response =  axios.get('http://localhost:3000/playlists/');
      console.log(response)
      return response
    }
    catch(err){
      console.error(err)
      throw err
    }
  }
  
  (async () => {
    try {
      const result = await getPlaylists();
      console.log(result)
      // or
      // const result = await postData('example-endpoint', { key: 'value' });
      // Handle the result as needed
    } catch (error) {
      // Handle errors
    }
  })();

    return (
      <section id="playlists" className=" w-full flex flex-col gap-2">
        <header className='text-page-white'>
          <h2>Technically Playlists</h2>
        </header>

        <section
          id="playlistContainer"
          className="flex justify-start items-center gap-3  overflow-x-scroll no-scrollbar"
        >
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
        </section>
      </section>
    );
}
