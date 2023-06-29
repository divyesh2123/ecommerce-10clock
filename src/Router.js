import React from 'react'
import Post from './Post';
import Posts from './Posts';
import Home from './Home';
import { useRoutes } from 'react-router-dom';

export default function Router() {

    let element = useRoutes([
        { path: "/home", element: <Home /> },
        { path: "/posts", element: <Posts /> },
        { path: "/post:id", element: <Post /> },
       
      ]);
   
      return element;
}
