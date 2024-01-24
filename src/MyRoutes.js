import React from 'react'
import { useRoutes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import User1 from './User1';
import Profile from './Profile';
import Account from './Account';
import RequireAuth from './private/RequireAuth';
import Product from './Product';
const LoginNew = React.lazy(() => import("./Login"));



export default function MyRoutes() {
    let element = useRoutes([

        { path: "/", element: <LoginNew /> },
        { path: "/signup", element: <Signup /> },
        { path: "/productlist", element: <RequireAuth><Product/>



    
        </RequireAuth> },
        {
          path: "/user",
          element: <User1 />,
          children: [
            {
              path: "profile",
              element: <Profile />,
            },
            { path: "account", element: <Account /> },
          ],
        },
        
      ]);
    
      return element;
}
