import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsSection = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-luxury-black to-luxury-gray relative overflow-hidden">
            {/* 装饰元素 */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-10 left-10 w-40 h-40 rounded-full border border-gold"></div>
                <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border border-gold"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-gold/50"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-elegant text-4xl md:text-5xl text-gold mb-6 relative inline-block">
                        <span className="relative z-10">关于项目</span>
                        <span className="absolute bottom-2 left-0 w-full h-2 bg-gold/20 -z-10"></span>
                    </h2>

                    <p className="text-white/80 text-lg mb-10 leading-relaxed">
                        在这里了解项目背后的故事
                    </p>

                    <Link
                        to="/about-us"
                        className="inline-block group relative overflow-hidden px-8 py-4 bg-transparent border-2 border-gold text-gold font-semibold rounded-full transition-all duration-300 hover:bg-gold hover:text-luxury-black"
                    >
            <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300">
              了解更多
            </span>
                        <span className="absolute top-0 right-0 w-12 h-12 bg-gold/20 rounded-full -translate-x-6 -translate-y-6 group-hover:scale-300 transition-transform duration-500"></span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
