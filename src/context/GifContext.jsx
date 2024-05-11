import { GiphyFetch } from '@giphy/js-fetch-api';
import React, { createContext, useContext, useState } from 'react';

const GifContext = createContext();

const GifContextProvider = ({ children }) => {
  const [gif, setGif] = useState([]);
  const [filter, setFilter] = useState('gifs');
  const [favorites, setFavorites] = useState([]);

  const GifFetch = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);

  return (
    <GifContext.Provider
      value={{ GifFetch, gif, setGif, filter, setFilter, favorites }}
    >
      {children}
    </GifContext.Provider>
  );
};

export const GifState = () => {
  return useContext(GifContext);
};

export default GifContextProvider;
