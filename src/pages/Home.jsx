// src/pages/Home.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import FeaturedBoxes from '../components/BFeaturedBoxes';
import BrandStory from '../components/BrandStory';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const heroRef = useRef(null);
    const featuredRef = useRef(null);
    const storyRef = useRef(null);
    const testimonialsRef = useRef(null);

    useEffect(() => {
        // Hero section animation
        const heroTl = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        heroTl.to(heroRef.current.querySelector('.hero-title'), {
            y: -100,
            scale: 1.05,
            opacity: 0.8
        });

        // Featured boxes animation
        gsap.from(featuredRef.current.querySelectorAll('.featured-box'), {
            opacity: 0,
            y: 50,
            stagger: 0.3,
            scrollTrigger: {
                trigger: featuredRef.current,
                start: "top 80%",
                once: true
            }
        });

        // Brand story animation
        gsap.from(storyRef.current, {
            x: -100,
            opacity: 0,
            scrollTrigger: {
                trigger: storyRef.current,
                start: "top 80%",
                once: true
            }
        });

        // Testimonials animation
        gsap.from(testimonialsRef.current, {
            y: 50,
            opacity: 0,
            scrollTrigger: {
                trigger: testimonialsRef.current,
                start: "top 80%",
                once: true
            }
        });
    }, []);

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-10"></div>
                <div className="absolute inset-0">
                    <img src="https://picsum.photos/id/1048/1920/1080" alt="Luxury Box" className="w-full h-full object-cover" />
                </div>
                <div className="container mx-auto px-6 py-12 relative z-20 text-center">
                    <h1 className="hero-title text-[clamp(3rem,8vw,6rem)] font-bold leading-tight mb-6 tracking-tighter">
                        开启<span className="text-gold-400">非凡</span>惊喜之旅
                    </h1>
                    <p className="text-[clamp(1rem,2vw,1.5rem)] text-gray-300 max-w-3xl mx-auto mb-10">
                        探索限量版奢华盲盒，每一次开启都是对未知惊喜的尊贵礼遇
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/collection" className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-black font-bold rounded-lg hover:shadow-xl hover:shadow-gold-500/30 transition-all duration-300 transform hover:scale-105">
                            探索系列
                        </Link>
                        <Link to="/membership" className="px-8 py-4 bg-transparent border-2 border-gold-400 text-gold-400 font-bold rounded-lg hover:bg-gold-400/10 transition-all duration-300">
                            会员特权
                        </Link>
                    </div>
                </div>
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-gold-400">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
            </section>

            {/* Featured Boxes */}
            <section ref={featuredRef} className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
                <div className="container mx-auto">
                    <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold text-center mb-16">
                        精选<span className="text-gold-400">奢华</span>系列
                    </h2>
                    <FeaturedBoxes />
                </div>
            </section>

            {/* Brand Story */}
            <section ref={storyRef} className="py-24 px-6 bg-gray-900">
                <div className="container mx-auto">
                    <BrandStory />
                </div>
            </section>

            {/* Testimonials */}
            <section ref={testimonialsRef} className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black relative">
                <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url(https://picsum.photos/id/1071/1920/1080)' }}></div>
                <div className="container mx-auto relative z-10">
                    <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold text-center mb-16">
                        会员<span className="text-gold-400">评价</span>
                    </h2>
                    <Testimonials />
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-16 px-6 bg-gradient-to-r from-gray-950 to-black border-t border-b border-gold-400/20">
                <div className="container mx-auto">
                    <Newsletter />
                </div>
            </section>
        </div>
    );
};

export default Home;