import React from 'react';
import '../styles/BlindBoxHomepageAd.css'; // 样式文件将在后面提供

const BlindBoxHomepageAd = () => {
    return (
        <section className="hero-section">
            {/* 背景图和半透明黑色蒙层 */}
            <div className="hero-bg">
                {/* 背景图将通过CSS设置 */}
                <div className="overlay"></div> {/* 半透明黑色蒙层 */}
            </div>

            {/* 内容区域 */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <div className="inline-block px-4 py-1 border border-gold/50 rounded-full mb-6">
                            <span className="text-gold text-sm font-modern tracking-wider">限量尊享系列</span>
                        </div>
                        <h2 className="font-elegant text-[clamp(2rem,5vw,4rem)] leading-tight mb-6 text-shadow-gold">
                            皇家<span className="text-gold italic">艺术</span>盲盒<br/>全球限量发行
                        </h2>
                        <p className="text-white/70 text-lg mb-8 max-w-lg">
                            探索奢华艺术珍藏，每一款盲盒都蕴藏着世界级艺术家的匠心之作，只为少数人专属定制。
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                className="px-8 py-3 bg-gold text-luxury-black font-modern font-semibold rounded-sm hover:bg-gold-light transition-all duration-300 shadow-gold hover:shadow-gold-glow transform hover:-translate-y-1">
                                立即探索
                            </button>
                            <button
                                className="px-8 py-3 bg-transparent border border-gold/70 text-gold font-modern font-semibold rounded-sm hover:border-gold hover:bg-gold/10 transition-all duration-300 transform hover:-translate-y-1">
                                了解系列 <i className="fa fa-long-arrow-right ml-2"></i>
                            </button>
                        </div>
                        <div className="mt-12 flex items-center">
                            <div className="flex -space-x-2">
                                <img src="https://picsum.photos/id/91/100/100" alt="用户头像"
                                     className="w-10 h-10 rounded-full border-2 border-luxury-black"/>
                                <img src="https://picsum.photos/id/92/100/100" alt="用户头像"
                                     className="w-10 h-10 rounded-full border-2 border-luxury-black"/>
                                <img src="https://picsum.photos/id/93/100/100" alt="用户头像"
                                     className="w-10 h-10 rounded-full border-2 border-luxury-black"/>
                                <img src="https://picsum.photos/id/94/100/100" alt="用户头像"
                                     className="w-10 h-10 rounded-full border-2 border-luxury-black"/>
                            </div>
                            <div className="ml-4">
                                <div className="text-white font-semibold">已有 2,500+ 收藏家加入</div>
                                <div className="text-gold text-sm">今日新增 42 位尊贵会员</div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 relative">
                        <div className="relative w-full max-w-md mx-auto">
                            {/* 主盲盒展示 */}
                            <div className="relative float-effect">
                                <div className="absolute inset-0 rounded-full gold-gradient opacity-30 blur-xl"></div>
                                <img src="https://picsum.photos/id/20/600/600" alt="皇家艺术盲盒"
                                     className="w-full h-auto rounded-xl shadow-2xl border-4 border-gold/30 relative z-10"/>
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
                                style={{animationDirection: 'reverse'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlindBoxHomepageAd;