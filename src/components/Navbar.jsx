// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/react.svg';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartItems, setCartItems] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-black/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}>
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src={Logo} alt="Luxury Box" className="h-8 w-auto" />
                    <span className="ml-2 text-2xl font-bold tracking-tight text-gold-400">LUXEBOX</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/" className="text-white hover:text-gold-400 transition-colors">首页</Link>
                    <Link to="/collection" className="text-white hover:text-gold-400 transition-colors">盲盒系列</Link>
                    <Link to="/membership" className="text-white hover:text-gold-400 transition-colors">会员特权</Link>
                    <Link to="/about" className="text-white hover:text-gold-400 transition-colors">关于我们</Link>
                </div>

                {/* Icons */}
                <div className="flex items-center space-x-6">
                    <button className="text-white hover:text-gold-400 transition-colors">
                        <i className="fas fa-search text-xl"></i>
                    </button>
                    <button className="text-white hover:text-gold-400 transition-colors relative">
                        <i className="fas fa-shopping-cart text-xl"></i>
                        <span className="absolute -top-2 -right-2 bg-gold-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems}
            </span>
                    </button>
                    <button className="text-white hover:text-gold-400 transition-colors">
                        <i className="fas fa-user text-xl"></i>
                    </button>
                    <button
                        className="md:hidden text-white hover:text-gold-400 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <i className="fas fa-bars text-xl"></i>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-lg p-4 absolute top-full left-0 right-0 border-t border-gray-800">
                    <div className="flex flex-col space-y-4">
                        <Link to="/" className="text-white hover:text-gold-400 transition-colors py-2 border-b border-gray-800">首页</Link>
                        <Link to="/collection" className="text-white hover:text-gold-400 transition-colors py-2 border-b border-gray-800">盲盒系列</Link>
                        <Link to="/membership" className="text-white hover:text-gold-400 transition-colors py-2 border-b border-gray-800">会员特权</Link>
                        <Link to="/about" className="text-white hover:text-gold-400 transition-colors py-2">关于我们</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;