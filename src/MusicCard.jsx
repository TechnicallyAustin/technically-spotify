import React from 'react'

export default function MusicCard() {
    return (
      <article id="musicCard" className="w-2/5 aspect-square flex-none rounded-lg">
        <figure className="w-full h-full flex flex-col justify-between items-center rounded gap-2 ">
          <img src="" alt="" id="" className="w-full h-full aspect-square " />
          <figcaption className="w-full flex justify-start items-end">
            <p className="">Fig Caption</p>
          </figcaption>
        </figure>
      </article>
    );
}
