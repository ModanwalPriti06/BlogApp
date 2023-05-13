import React from 'react'

import Home from './pages/home/Home'
//import Single from './pages/single/Single'
import Write from './pages/write/Write'
//import Header from './header/Header'
import TopBar from './topbar/TopBar'
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Single from './pages/single/Single';
import Setting from './pages/settings/Setting';
import Posts from './posts/Posts';


import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {
 const user=true;
  
  return (
    <>
    
     <Router>   
     <TopBar/>   
      <Routes>
       <Route path="/" element={<Home/>}></Route>
       
       <Route path="/register" element={user?<Home/>:<Register/>}></Route>
       <Route path="/login" element={<Login/>}></Route>

       <Route path="/write" element={user?<Write/>:<Register/>}></Route>
       <Route path="/settings" element={user?<Setting/>:<Register/>}></Route>
       {/* <Route path="/write" element={<Write/>}></Route>
       <Route path="/settings" element={<Setting/>}></Route> */}
       <Route path="/post/:postId" element={<Single/>}></Route>
       <Route path="/posts" element={<Posts/>}></Route>
    </Routes>
     </Router>
    </>
  )
}

export default App














/*
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Register from './Pages/Register'
import Login from './Pages/Login'
import Single from './Pages/Single'
import Write from './Pages/Write'
import Home from './Pages/Home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './style.scss';

function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[{
      path: "/",
      element: <Home/>,
    },
    {
      path: "/post/:id",
      element: <Single/>,
    },
    {
      path: "/write",
      element: <Write/>,
    },
  ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },

]);*/
