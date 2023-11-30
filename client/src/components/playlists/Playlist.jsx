import React, { useState, useEffect } from "react";
import MusicCard from "./MusicCard";
import axios from "axios";

export default function Playlist() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(null);
  const [playlistItems, setPlaylistItems] = useState([]);


  const getPlaylists = async () => {
    try {
      const response = await axios.get("http://localhost:3000/playlists/");
      setData(response.data);
      return response.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await getPlaylists();
        setLoading(false);
        console.log(result)

        if (result.playlists.items) {
          setPlaylistItems(result.playlists.items);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
        // Handle errors as needed
      }
    })();
  }, []);

  

  return (
    <section id="playlists" className="w-full flex flex-col gap-2">
      <header className="text-page-white">
        <h2>Technically Playlists</h2>
      </header>

      <section
        id="playlistContainer"
        className="flex justify-start items-center gap-3  overflow-x-scroll no-scrollbar"
      >
        {playlistItems.map((item, index) => (
          <MusicCard key={index}  name={item.name} image={item.images[0].url} tracksEndpoint={item.tracks.href} description={item.description}  />
        ))}
      </section>
    </section>
  );
}
