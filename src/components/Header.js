import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import '../styles/Home.css'

// import Home from './views/Home';
import About from './About';
import Contact from './Contact';
import Home from './Home';

function Header() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route
                        path="*"
                        element={
                            <section>
                                <h2>404 Page not found</h2>
                            </section>
                        }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default Header;




