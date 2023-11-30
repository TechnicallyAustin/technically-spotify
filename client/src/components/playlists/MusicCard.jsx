import React, { useState } from "react";

export default function MusicCard(props) {
  const {name, image, tracksEndpoint, description} = props
  const [clicked, setClicked] = useState(false)

  const togglePlaylist = () => {
    console.log("playlist toggle hit");
    setClicked(prevState => !prevState)
  };

  return (
    <article
      id="musicCard"
      className="aspect-square w-2/5 flex-none rounded-lg"
      onClick={togglePlaylist}
    >
      <figure className="w-full flex flex-col justify-between items-center rounded gap-2">
        <img src={image} alt="" id="" className="w-full h-full aspect-square rounded-lg " />
        <figcaption className="w-full flex justify-start items-end">
          <p className="text-sm">{name}</p>
        </figcaption>
      </figure>
    </article>
  );
}
