import React from "react";
import Playlist from "./components/playlists/Playlist";

import Category from "./components/categories/Category";
import Recommendations from "./components/recommendations/Album";




export default function MainComponent() {
  return (
    <main className="w-full relative top-8 block p-4  gap-4 py-16 flex flex-col justify-around text-text-color sans">
      <Playlist />
      <Category />
      <Recommendations />
    </main>
  );
}
