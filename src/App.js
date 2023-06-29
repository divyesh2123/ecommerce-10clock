import logo from './logo.svg';
// import './App.css';
import Login from './Login';
import Signup from './Signup';
import Product from './Product';
import RequireAuth from './private/RequireAuth'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Button from './Button';
import Posts from './Posts';
import NewPost from './NewPost';
import Post from './Post';

function App() {
  return (
    <BrowserRouter>
     <div>entired common things</div>

    <Routes>

     

    <Route path="/" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/productlist" element={<RequireAuth><Product/>


    
      </RequireAuth>}/>

  <Route path='posts' element={<Posts />}>
        <Route path='new' element={<NewPost />} /> 
       <Route path=':postId' element={<Post />} /> 
 </Route>


    </Routes>

    
    </BrowserRouter>
  );
}

export default App;
