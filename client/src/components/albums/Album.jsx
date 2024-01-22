import React, { useState, useEffect } from "react";

import axios from "axios";
import RecCard from "./AlbumCard";
import AlbumCard from "./AlbumCard";

export default function Albums() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(null);
  const [albums, setAlbums] = useState([]);

  const getAlbums = async () => {
    try {
      const response = await axios.get("http://localhost:3000/albums");
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
        const result = await getAlbums();
        setLoading(false);
        console.log(result.albums);

        if (result.albums.items) {
          setAlbums(result.albums.items);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);

      }
    })();
  }, []);

  return (
    <section id="albums" className="w-full flex flex-col gap-2">
      <header className="text-page-white">
        <h2>Technically Albums</h2>
      </header>

      <section
        id="albumContainer"
        className="flex justify-start items-center gap-3  overflow-x-scroll no-scrollbar"
      >
        {albums.map((item, index) => (
          <AlbumCard
            key={index}
            name={item.name}
            image={item.images[0].url}
            id={item.id}
          />
        ))}
      </section>
    </section>
  );
}
