import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './pages/FormStyles.css'
import Home from './pages/Home.jsx'
import Navbar from './pages/Navbar.jsx';
import LoginForm from './pages/Login.jsx'; 
import SignUpForm from './pages/Signup.jsx'; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
