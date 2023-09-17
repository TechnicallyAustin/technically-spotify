import React from "react";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css";
import Profile from "./components/profile/Profile";
import Home from "./components/home/Home";
import Login from "./components/home/Login";
import Logout from "./components/home/Logout";
import SignUp from "./components/home/SignUp";


// Set up Client side Routing
export default function App() {
  return (
    <div id="app" className="w-screen bg-page-color text-page-white">
      <Router>
        <Routes>
          {/*
        <Route path="admin/login" element={} />
        <Route path="admin/logout" element={} />
        <Route path="admin/signup" element={} />

        <Route path="/login" element={} />
        <Route path="/logout" element={} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />

          {/*} <Route path="/home" element={} />
        <Route path="/playlists" element={} />
        <Route path="/search" element={} />
        <Route path="/artists" element={} />
        <Route path="/friends" element={} />
  <Route path="/liked-songs" element={} /> */}
        </Routes>
      </Router>
    </div>
  );
}
