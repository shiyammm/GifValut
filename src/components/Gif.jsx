import React from 'react';
import { Link } from 'react-router-dom';

const Gif = ({ gif, hover = true }) => {
  return (
    <Link href={`/${gif.type}/${gif.slug}`}>
      <div className="relative w-full mb-3 cursor-pointer group aspect-video">
        <img
          src={gif?.images?.fixed_width.webp}
          alt={gif.title}
          className="object-cover w-full transition-all duration-300 rounded"
        />
        {hover && (
          <div className="absolute inset-0 flex items-end gap-3 p-2 rounded opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent via-transparent to-black">
            <img
              src={gif?.user?.avatar_url}
              alt={gif?.user?.display_name}
              className="object-cover rounded size-10"
            />
            <span>{gif?.user?.display_name}</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Gif;
