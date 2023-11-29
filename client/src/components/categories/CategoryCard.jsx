import React from "react";

export default function CategoryCard(props) {
  const { name, image, id, } = props;

  return (
    <article
      id={id}
      className="aspect-square w-2/5 flex-none rounded-lg"
    >
      <figure className="w-full flex flex-col justify-between items-center rounded gap-2">
        <img
          src={image}
          alt=""
          id=""
          className="w-full h-full aspect-square rounded-lg "
        />
        <figcaption className="w-full flex justify-start items-end">
          <p className="text-sm">{name}</p>
        </figcaption>
      </figure>
    </article>
  );
}
