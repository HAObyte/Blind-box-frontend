import React from 'react';
import '../styles/BlindBoxHomepageAd.css';
import {Link} from "react-router-dom"; // 样式文件将在后面提供

const BlindBoxHomepageAd = () => {
    return (
        <section className="relative overflow-hidden bg-luxury-black py-8 md:py-16">
            <div
                className="absolute inset-0 bg-[url('https://picsum.photos/id/1/1920/1080')] bg-cover bg-center opacity-20"></div>
            <div
                className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/70 to-transparent"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <div className="inline-block px-4 py-1 border border-gold/50 rounded-full mb-6">
                            <span className="text-gold text-sm font-modern tracking-wider italic">JoJo's Bizarre Adventure</span>
                        </div>
                        <h2 className="font-elegant text-[clamp(2rem,5vw,4rem)] leading-tight mb-6 text-shadow-gold">
                            精美<span className="text-gold italic"> JoJo </span>盲盒<ul/> NJU试点发售
                        </h2>
                        <p className="text-white/70 text-lg mb-8 max-w-lg">
                            全心追求真正的动漫还原，一心赤诚只为NJUers
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="box-list"
                                className="px-8 py-3 bg-gold text-luxury-black font-modern font-semibold rounded-sm hover:bg-gold-light transition-all duration-300 shadow-gold hover:shadow-gold-glow transform hover:-translate-y-1">
                                立即探索
                            </Link>
                        </div>
                    </div>

                    <div className="md:w-1/2 relative">
                        <div className="relative w-full max-w-md mx-auto">
                            {/* 主盲盒展示 */}
                            <div className="relative float-effect">
                                <div className="absolute inset-0 rounded-full gold-gradient opacity-30 blur-xl"></div>
                                <img
                                    src="/AD.png"
                                    className="w-full h-auto rounded-xl shadow-2xl border-4 border-gold/30 relative z-10"
                                    alt="皇家艺术盲盒封面"
                                />
                                <div
                                    className="absolute -top-4 -right-4 bg-gold text-luxury-black font-elegant font-bold px-4 py-2 rounded-sm shadow-lg transform rotate-3 z-20">
                                    限量
                                </div>
                            </div>

                            {/* 装饰元素 */}
                            <div
                                className="absolute -z-10 top-1/4 -left-10 w-20 h-20 rounded-full border border-gold/30 rotate-slow"></div>
                            <div
                                className="absolute -z-10 bottom-1/3 -right-5 w-12 h-12 rounded-full border border-gold/20 rotate-slow"
                                style={{ animationDirection: 'reverse' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 底部装饰条 */}
            <div className="absolute bottom-0 left-0 right-0 h-1 gold-gradient"></div>
        </section>
    );
};

export default BlindBoxHomepageAd; // 修复了导出语句