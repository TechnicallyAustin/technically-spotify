import React from "react";

export default function MusicCard() {
  return (
    <article
      id="musicCard"
      className="aspect-square w-2/5 flex-none rounded-lg"
    >
      <figure className="w-full flex flex-col justify-between items-center rounded gap-2">
        <img src="" alt="" id="" className="w-full h-full aspect-square rounded-lg " />
        <figcaption className="w-full flex justify-start items-end">
          <p className="text-sm">Fig Caption</p>
        </figcaption>
      </figure>
    </article>
  );
}
