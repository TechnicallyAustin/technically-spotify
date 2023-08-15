
import React from 'react'

export default function AudioBookCard() {
    return (
      <article id="audioBookCard" className="aspect-square w-2/5 flex-none rounded-lg">
        <figure className="w-full flex flex-col justify-between items-center rounded gap-2  ">
          <img src="" alt="" id="" className="w-full h-full aspect-square " />
          <figcaption className="w-full flex flex-col justify-center gap-2 items-start text-sm">
            <p className="text-xs">Fig Caption</p>
            <p>Author Name</p>
          </figcaption>
        </figure>
      </article>
    );
}


