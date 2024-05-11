import React, { useState, useEffect } from 'react';
import { GifState } from '../context/GifContext';
import Gif from '../components/Gif';

const Home = () => {
  const [gifs, setGifs] = useState([]);

  const { GifFetch, gif, filter, setFilter, favorites } = GifState();

  const fetchGifs = async () => {
    const { data } = await GifFetch.trending({
      limit: 20,
      type: filter,
      rating: 'g',
    });
    setGifs(data);
  };

  useEffect(() => {
    fetchGifs();
  }, [filter]);

  return (
    <section>
      <img src="banner.gif" alt="banner" className="object-cover w-full mb-2" />
      <div className="gap-2 columns-2 md:columns-3 lg:columns-4 xl:columns-5 ">
        {gifs.map((gif) => (
          <Gif gif={gif} />
        ))}
      </div>
    </section>
  );
};

export default Home;
