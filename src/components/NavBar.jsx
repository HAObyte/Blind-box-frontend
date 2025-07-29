// src/components/NavBar.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function NavBar() {
    const { isLoggedIn, logout } = useAuth();

    return (
        <header className="sticky top-0 z-50 bg-luxury-black/90 backdrop-blur-md border-b border-gold/30 transition-all duration-300">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* 品牌 Logo */}
                <div className="flex items-center">
                    <div
                        className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center mr-3 shadow-gold">
                        <span className="font-elegant font-bold text-luxury-black text-xl">HBB</span>
                    </div>
                    <h1 className="font-elegant text-2xl md:text-3xl text-gold text-shadow-gold">Hanson's Blind Box</h1>
                </div>

                {/* 导航链接 - 桌面端 */}
                <nav className="hidden md:flex items-center space-x-8">
                    {isLoggedIn && (
                        <>
                            <Link to="/"
                                  className="font-modern text-white hover:text-gold transition-colors duration-300 border-b-2 border-gold py-1">
                                首页
                            </Link>
                            <Link to="/box-list" className="font-modern text-white/70 hover:text-gold transition-colors duration-300 border-b-2 border-transparent hover:border-gold/50 py-1">
                                盲盒系列
                            </Link>
                            <Link to="/box-search" className="font-modern text-white/70 hover:text-gold transition-colors duration-300 border-b-2 border-transparent hover:border-gold/50 py-1">
                                盲盒搜索
                            </Link>
                            <Link to="/review" className="font-modern text-white/70 hover:text-gold transition-colors duration-300 border-b-2 border-transparent hover:border-gold/50 py-1">
                                盲盒评论
                            </Link>
                        </>
                    )}
                </nav>

                {/* 用户功能区 */}
                <div className="flex items-center space-x-5">
                    <div className="hidden md:block h-8 w-[1px] bg-gold/30 mx-1"></div>
                    {isLoggedIn ? (
                        // 用户头像和下拉菜单
                        <div className="relative group">
                            <div className="w-9 h-9 rounded-full border-2 border-gold/50 overflow-hidden cursor-pointer">
                                <img
                                    src="https://picsum.photos/id/64/200/200"
                                    alt="用户头像"
                                    height="50px"
                                />
                            </div>
                            <div className="absolute right-0 mt-2 w-48 bg-luxury-gray border border-gold/30 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right scale-95 group-hover:scale-100 z-50">
                                <div className="py-2">
                                    <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-luxury-black hover:text-gold">
                                        个人中心
                                    </Link>
                                    <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-luxury-black hover:text-gold">
                                        我的收藏
                                    </Link>
                                    <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-luxury-black hover:text-gold">
                                        设置
                                    </Link>
                                    <div className="border-t border-gold/20 my-1"></div>
                                    <Link
                                        to="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            logout();
                                        }}
                                        className="block px-4 py-2 text-sm text-white/70 hover:bg-luxury-black hover:text-gold"
                                    >
                                        退出登录
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex space-x-3">
                            <Link
                                to="/login"
                                className="font-modern text-white/70 hover:text-gold transition-colors duration-300 border-b-2 border-transparent hover:border-gold/50 py-1"
                            >
                                登录
                            </Link>
                            <Link
                                to="/register"
                                className="font-modern text-white/70 hover:text-gold transition-colors duration-300 border-b-2 border-transparent hover:border-gold/50 py-1"
                            >
                                注册
                            </Link>
                        </div>
                    )}

                    {/* 移动端菜单按钮 */}
                    <button className="md:hidden text-white/80 hover:text-gold transition-colors duration-300">
                        <i className="fa fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default NavBar;