import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Items from './pages/Items';
import Carrousel from './pages/Carrousel';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CreatePost from './pages/CreatePost';
import Login from './pages/login';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import UpdatePost from './pages/UpdatePost';

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locaux" element={<Home />} />

          <Route path="/items/:id" element={<Items />} />
          <Route path="/login" element={<Login />} />
          

          <Route element={<PrivateRoute />}>
          <Route path="/create_post" element={<CreatePost />} />
          <Route path="/update_post/:id" element={<UpdatePost />} />
          <Route path="/profile" element={<Profile />} />
          </Route>

          
        </Routes>
    </BrowserRouter>
  );
}
