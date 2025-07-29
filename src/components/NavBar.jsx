import React from "react";

export default function NavBar() {
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
                    <a href="#"
                       className="font-modern text-white hover:text-gold transition-colors duration-300 border-b-2 border-gold py-1">
                        首页
                    </a>
                    <a href="#" className="font-modern text-white/70 hover:text-gold transition-colors duration-300 border-b-2 border-transparent hover:border-gold/50 py-1">
                        盲盒系列
                    </a>
                    <a href="#" className="font-modern text-white/70 hover:text-gold transition-colors duration-300 border-b-2 border-transparent hover:border-gold/50 py-1">
                        收藏图鉴
                    </a>
                    <a href="#" className="font-modern text-white/70 hover:text-gold transition-colors duration-300 border-b-2 border-transparent hover:border-gold/50 py-1">
                        会员尊享
                    </a>
                </nav>

                {/* 用户功能区 */}
                <div className="flex items-center space-x-5">
                    <button className="text-white/80 hover:text-gold transition-colors duration-300 relative">
                        <i className="fa fa-search text-xl"></i>
                    </button>
                    <button className="text-white/80 hover:text-gold transition-colors duration-300 relative">
                        <i className="fa fa-bell text-xl"></i>
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold rounded-full flex items-center justify-center text-xs text-luxury-black font-bold">
              3
            </span>
                    </button>
                    <button className="text-white/80 hover:text-gold transition-colors duration-300 relative">
                        <i className="fa fa-shopping-bag text-xl"></i>
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold rounded-full flex items-center justify-center text-xs text-luxury-black font-bold">
              2
            </span>
                    </button>

                    <div className="hidden md:block h-8 w-[1px] bg-gold/30 mx-1"></div>

                    {/* 用户头像和下拉菜单 */}
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
                                <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-luxury-black hover:text-gold">
                                    个人中心
                                </a>
                                <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-luxury-black hover:text-gold">
                                    我的收藏
                                </a>
                                <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-luxury-black hover:text-gold">
                                    设置
                                </a>
                                <div className="border-t border-gold/20 my-1"></div>
                                <a href="#" className="block px-4 py-2 text-sm text-white/70 hover:bg-luxury-black hover:text-gold">
                                    退出登录
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* 移动端菜单按钮 */}
                    <button className="md:hidden text-white/80 hover:text-gold transition-colors duration-300">
                        <i className="fa fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </header>
    );
}