import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiEllipsisVertical } from 'react-icons/hi2';
import { RiMenu3Fill } from 'react-icons/ri';
import { GifState } from '../context/GifContext';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  const { GifFetch, gif, filter, setFilter, favorites } = GifState();

  const fetchCategories = async () => {
    const { data } = await GifFetch.categories();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <nav className="px-5 py-3 mb-2">
      <div className="relative flex items-center justify-between">
        <Link
          href={`/`}
          className="flex items-center gap-2 text-5xl font-bold tracking-tighter cursor-pointer"
        >
          <img src="logo.svg" className="w-8" alt="logo" />
          GifValut
        </Link>
        <div className="flex items-center gap-5">
          {categories?.slice(0, 5).map((category) => (
            <Link
              href={`/${category.name_encoded}`}
              className="hidden px-4 py-1 text-xl font-semibold border-b-2 border-white hover:gradient lg:block"
              key={category.name}
            >
              {category.name}
            </Link>
          ))}

          <button
            onClick={() => setShowCategories(!showCategories)}
            className="hidden lg:block"
          >
            <HiEllipsisVertical
              size={38}
              className={`${
                showCategories ? 'gradient' : ''
              }text-xl text-white border-b-2 border-white hover:gradient text-bold`}
            />
          </button>

          {showCategories && (
            <div className="absolute right-0 z-20 w-full px-10 pt-8 top-20 gradient pb-9">
              <span className="pb-4 text-lg font-semibold "> Categories</span>
              <hr className="my-5 bg-gray-100 opacity-50" />
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {categories?.map((category) => (
                  <Link
                    href={`/${category.name_encoded}`}
                    className="px-3 py-3 text-xl font-semibold border-white hover:gradient"
                    key={category.name}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
          {favorites.length > 0 && (
            <Link
              href={`/`}
              className="px-4 py-1 text-lg font-semibold bg-gray-600 rounded"
            >
              Favorite Gif
            </Link>
          )}

          <button
            onClick={() => setShowCategories(!showCategories)}
            className="block lg:hidden"
          >
            <RiMenu3Fill
              size={35}
              className={`${
                showCategories ? 'gradient' : ''
              }text-sky-400 active:ring-0`}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
