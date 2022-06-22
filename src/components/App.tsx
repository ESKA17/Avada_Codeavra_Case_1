import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Layout from './Layout';
import {Register} from './Forms/Register';
import {Login} from './Forms/Login';
import Profile from '../pages/Profile';
import {AdminLayout} from './AdminLayout/AdminLayout';
import Dashboard from '../pages/Dashboard';
import ProfileLayout from './ProfileLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<Profile />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
