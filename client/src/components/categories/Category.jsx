import React, { useState, useEffect } from "react";

import axios from "axios";
import CategoryCard from "./CategoryCard";

export default function Category() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(null);
  const [category, setCategory] = useState([]);

  const getCategory = async () => {
    try {
      const response = await axios.get("http://localhost:3000/categories/");
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
        const result = await getCategory();
        setLoading(false);
        console.log(result.categories.items[0].icons[0].url);

        if (result.categories.items) {
          setCategory(result.categories.items);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
        // Handle errors as needed
      }
    })();
  }, []);

  return (
    <section id="categories" className="w-full flex flex-col gap-2">
      <header className="text-page-white">
        <h2>Technically Categories</h2>
      </header>

      <section
        id="categoryContainer"
        className="flex justify-start items-center gap-3  overflow-x-scroll no-scrollbar"
      >
        {category.map((item, index) => (
          <CategoryCard
            key={index}
            name={item.name}
            image={item.icons[0].url}
            id={item.id}

          
          />
        ))}
      </section>
    </section>
  );
}
