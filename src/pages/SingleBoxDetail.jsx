// src/pages/SingleBoxDetail.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from 'react-router-dom';

export default function SingleBoxDetail() {
    // 获取从列表页传递的盲盒数据
    const navigate = useNavigate();
    const location = useLocation();
    const box = location.state?.box || {
        // 默认数据，防止未传递参数时出错
        title: "黄金体验礼盒",
        image: "黄金之风/乔鲁诺.jpg",
        price: 39.9,
        tags: ["UR", "新品"],
        description: "包含黄金之风主角乔鲁诺的限量版手办，采用高精度工艺制作，细节还原度极高。每个盲盒中可能包含不同姿势的乔鲁诺手办，以及神秘的替身配件。全球限量发售，极具收藏价值。"
    };

    // 计算稀有度标签
    const getRarityLabel = (tags) => {
        if (tags.includes("UR")) return "UR 顶级稀有";
        if (tags.includes("SSR")) return "SSR 超级稀有";
        if (tags.includes("SR")) return "SR 稀有";
        return "R 普通";
    };

    const handleClick = () => {
        navigate('/checkout', {
            state: { box }
        });
    }

    return (
        <>
            <NavBar />

            <section className="py-12 bg-luxury-black relative">
                <div className="container mx-auto px-4">
                    {/* 面包屑导航 */}
                    <div className="text-white/60 text-sm mb-8">
                        <a href="/" className="hover:text-gold transition-colors">首页</a>
                        <span className="mx-2">/</span>
                        <a href="/box-list" className="hover:text-gold transition-colors">所有盲盒</a>
                        <span className="mx-2">/</span>
                        <span className="text-gold">{box.title}</span>
                    </div>

                    {/* 主内容区 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* 左侧图片展示区 */}
                        <div className="space-y-6">
                            <div className="relative overflow-hidden rounded-2xl border border-gold/20 shadow-xl">
                                <img
                                    src={box.image}
                                    alt={box.title}
                                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-gold text-luxury-black px-3 py-1 rounded-full text-sm font-bold">
                                    {getRarityLabel(box.tags)}
                                </div>
                            </div>
                        </div>

                        {/* 右侧详情区 */}
                        <div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {box.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs bg-gold/10 text-gold px-2 py-0.5 rounded-full"
                                    >
                    {tag}
                  </span>
                                ))}
                            </div>

                            <h1 className="font-elegant text-4xl text-gold mb-6">{box.title}</h1>

                            <div className="mb-8">
                                <div className="flex items-end gap-3 mb-2">
                                    <span className="text-gold text-4xl font-bold">¥{box.price.toFixed(2)}</span>
                                    <span className="text-white/50 line-through text-sm">¥{Math.round(box.price * 1.3).toFixed(2)}</span>
                                    <span className="bg-red-500/20 text-red-300 text-xs px-2 py-0.5 rounded">限时优惠</span>
                                </div>
                                <p className="text-white/50 text-sm">包含随机款式，惊喜开箱体验</p>
                            </div>

                            <div className="mb-8 text-white/80 leading-relaxed border-b border-white/10 pb-6">
                                <h3 className="text-white text-lg font-medium mb-3">商品详情</h3>
                                <p>{box.description}</p>
                                <ul className="mt-4 space-y-2">
                                    <li className="flex items-start">
                                        <i className="fa fa-check text-gold mt-1 mr-2"></i>
                                        <span>100% 官方正品保证</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fa fa-check text-gold mt-1 mr-2"></i>
                                        <span>精美礼盒包装，适合收藏</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fa fa-check text-gold mt-1 mr-2"></i>
                                        <span>限量发售，售完即止</span>
                                    </li>
                                </ul>
                            </div>



                            {/* 按钮区域 */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                <button
                                    onClick={()=>handleClick(box)}
                                    className="flex-1 py-3 bg-gradient-to-r from-gold to-gold-light text-luxury-black font-modern font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/20 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
                                >
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>立即购买</span>
                                </button>
                            </div>

                            {/* 服务保障 */}
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div className="p-3">
                                    <i className="fa fa-truck text-gold text-xl mb-2"></i>
                                    <p className="text-white/70 text-sm">闪电发货</p>
                                </div>
                                <div className="p-3">
                                    <i className="fa fa-shield text-gold text-xl mb-2"></i>
                                    <p className="text-white/70 text-sm">正品保障</p>
                                </div>
                                <div className="p-3">
                                    <i className="fa fa-refresh text-gold text-xl mb-2"></i>
                                    <p className="text-white/70 text-sm">7天退换</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}