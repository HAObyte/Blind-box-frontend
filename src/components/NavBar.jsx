import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function NavBar() {
    // 登录状态相关
    const { isLoggedIn, currentUser, logout } = useAuth();

    // 移动端菜单状态
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // 滚动状态（用于导航栏样式变化）
    const [scrolled, setScrolled] = useState(false);

    // 监听滚动事件，改变导航栏样式
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-luxury-black shadow-lg shadow-gold/10 py-2'
                    : 'bg-luxury-black/90 backdrop-blur-md py-3'
            } border-b border-gold/30`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* 品牌 Logo 区域 */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center mr-3 shadow-gold transform hover:scale-105 transition-transform">
                                <span className="font-elegant font-bold text-luxury-black text-xl">HBB</span>
                            </div>
                            <h1 className="font-elegant text-2xl md:text-3xl text-gold text-shadow-gold">
                                Hanson's Blind Box
                            </h1>
                        </Link>
                    </div>

                    {/* 桌面端导航链接 */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {[
                            { path: '/', name: '首页', icon: 'fa-home' },
                            { path: '/box-list', name: '所有盲盒', icon: 'fa-cube' },
                            { path: '/review', name: '用户评论', icon: 'fa-comments' },
                            { path: '/about-us', name: '关于项目', icon: 'fa-info-circle' }
                        ].map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className="font-modern text-white/70 hover:text-gold transition-all duration-300 px-4 py-2 border-b-2 border-transparent hover:border-gold/50 relative group"
                            >
                                <i className={`fa ${item.icon} mr-2`}></i>
                                {item.name}
                                {/* 下划线动画效果 */}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* 用户功能区 */}
                    <div className="flex items-center space-x-4">
                        {/* 登录/未登录状态展示 */}
                        {isLoggedIn ? (
                            // 已登录：显示用户头像和下拉菜单
                            <div className="relative group">
                                <div className="w-10 h-10 rounded-full border-2 border-gold/50 overflow-hidden cursor-pointer ring-0 group-hover:ring-2 ring-gold/20 transition-all duration-300">
                                    <img
                                        src="https://picsum.photos/id/64/200/200"
                                        alt="用户头像"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* 用户下拉菜单 */}
                                <div className="absolute right-0 mt-2 w-48 bg-luxury-gray border border-gold/30 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right scale-95 group-hover:scale-100 z-50">
                                    <div className="py-2">
                                        <p className="px-4 py-1 text-xs text-white/50">登录账号：{currentUser?.username}</p>
                                        <div className="border-t border-gold/20 my-1"></div>
                                        <Link to="/profile" className="block px-4 py-2 text-sm text-white hover:bg-luxury-black hover:text-gold transition-colors">
                                            <i className="fa fa-user mr-2"></i>个人订单管理
                                        </Link>
                                        <div className="border-t border-gold/20 my-1"></div>
                                        <button
                                            onClick={logout}
                                            className="w-full text-left px-4 py-2 text-sm text-white/70 hover:bg-luxury-black hover:text-gold transition-colors"
                                        >
                                            <i className="fa fa-sign-out mr-2"></i>退出登录
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // 未登录：显示登录/注册按钮
                            <div className="flex items-center space-x-3">
                                <Link
                                    to="/login"
                                    className="font-modern text-white/70 hover:text-gold transition-colors duration-300 px-3 py-1"
                                >
                                    登录
                                </Link>
                                <Link
                                    to="/register"
                                    className="bg-gold/20 hover:bg-gold/30 text-gold font-modern px-3 py-1 rounded transition-colors duration-300"
                                >
                                    注册
                                </Link>
                            </div>
                        )}

                        {/* 移动端菜单按钮 */}
                        <button
                            className="md:hidden text-white/80 hover:text-gold transition-colors duration-300"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="菜单"
                        >
                            <i className={`fa ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* 移动端导航菜单 */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-luxury-black border-t border-gold/20 animate-fadeIn">
                    <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
                        {[
                            { path: '/', name: '首页', icon: 'fa-home' },
                            { path: '/box-list', name: '所有盲盒', icon: 'fa-cube' },
                            { path: '/review', name: '用户评论', icon: 'fa-comments' },
                            { path: '/about-us', name: '关于项目', icon: 'fa-info-circle' }
                        ].map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className="font-modern text-white/70 hover:text-gold transition-colors duration-300 px-4 py-2 border-l-4 border-transparent hover:border-gold"
                                onClick={() => setMobileMenuOpen(false)} // 点击后关闭菜单
                            >
                                <i className={`fa ${item.icon} mr-3`}></i>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}

export default NavBar;