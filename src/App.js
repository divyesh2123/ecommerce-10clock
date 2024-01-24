import logo from './logo.svg';
// import './App.css';
import Login from './Login';
import Signup from './Signup';
import Product from './Product';
import RequireAuth from './private/RequireAuth'
import { BrowserRouter, Routes,Route, Link } from 'react-router-dom';
import Button from './Button';
import Posts from './Posts';
import NewPost from './NewPost';
import Post from './Post';
import NoFound from './NoFound';
import Router from './Router';
import MyDisplay from './MyDisplay';
import User1 from './User1';
import Profile from './Profile.js';
import Account from './Account.js';
import MyRoutes from './MyRoutes.js';
import { Suspense } from 'react';

function App() {
  return (
    <BrowserRouter>
     <div>entired common things</div>

     <nav>
        <Link to="/home">Home</Link>
        <Link to="/user">User</Link>
      </nav>

      <Suspense fallback={<div>Loading</div>}>
     
    <MyRoutes/>
 
    </Suspense>
    {/* <Routes>

     

    <Route path="/" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/signup" element={<MyDisplay/>} />
    
    <Route path="/productlist" element={<RequireAuth><Product/>



    
      </RequireAuth>}/>

     

      <Route path="/user" element={<User1 />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="account" element={<Account />} />
     
        </Route>

        <Route path="*" element={<NoFound />}/>
 


    </Routes>  */}

    
    </BrowserRouter>
  );
}

export default App;
