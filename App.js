import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './assets/css/reset.css'
import './assets/css/style.css'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Research from './pages/Research'
import Notice from './pages/Notice'
import Project from './pages/Project'
import Member from './pages/Member'
import Contact from './pages/Contact'
import Live from './pages/Live'

const App = () => {
    return (
        <>
            <Router>
            <Header element="nexon" />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/research" element={<Research/>} />
                <Route path="/notice" element={<Notice/>} />
                <Route path="/project" element={<Project/>} />
                <Route path="/member" element={<Member />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/live" element={<Live/>} />
            </Routes>
            <Footer element="nexon section gray" />
            </Router>
        </>
    )
}

export default App