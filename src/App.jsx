import React from 'react';
import AppLayout from './layouts/App.layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Favorites from './pages/Favorites';
import Search from './pages/Search';
import SingleGif from './pages/SingleGif';
import GifContextProvider from './context/GifContext';

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/:category',
        element: <Category />,
      },
      {
        path: '/search/:query',
        element: <Search />,
      },
      {
        path: '/:type/:slug',
        element: <SingleGif />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
    ],
  },
]);

const App = () => {
  return (
    <GifContextProvider>
      <RouterProvider router={router} />
    </GifContextProvider>
  );
};

export default App;
