// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
//import Footer from './components/Footer';
import Home from './pages/Home';
import BoxDetail from './pages/BoxDetail';
import Collection from './pages/Collection';
import Membership from './pages/Membership';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import './styles/globals.css';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-white">
                <Navbar />
                <main className="pt-20 pb-16">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/box/:id" element={<BoxDetail />} />
                        <Route path="/collection" element={<Collection />} />
                        <Route path="/membership" element={<Membership />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/success" element={<Success />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;