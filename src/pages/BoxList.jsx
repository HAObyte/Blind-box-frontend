// src/pages/BoxList.jsx
import DetailCard from "../components/DetailCard.jsx";
import NavBar from "../components/NavBar.jsx";
import React, { useState } from "react";
import boxes from "../data/boxData.jsx";
import Footer from "../components/Footer.jsx"; // 导入盲盒数据

export default function BoxList() {
    const [searchTerm, setSearchTerm] = useState('');

    // 根据搜索词过滤盲盒
    const filteredBoxes = boxes.filter(box =>
        box.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        box.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <>
            <NavBar/>
            <section className="py-16 bg-luxury-black relative">
                <div className="container mx-auto px-4">
                    {/* 标题区域 */}
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="font-elegant text-3xl md:text-4xl text-white mb-2">我们的所有盲盒</h2>
                            <p className="text-white/50">找到你心仪的收藏</p>
                        </div>
                        <span className="text-gold text-sm">
                            {filteredBoxes.length} / {boxes.length} 个结果
                        </span>
                    </div>

                    {/* 搜索框 */}
                    <div className="mb-10">
                        <div className="relative max-w-2xl mx-auto">
                            <input
                                type="text"
                                placeholder="搜索盲盒名称或标签..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-luxury-gray/30 border border-gold/20 rounded-full py-3 px-6 pl-12 text-white focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                            />
                            <i className="fa fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gold/70"></i>
                        </div>
                    </div>

                    {/* 盲盒列表 */}
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                        {filteredBoxes.length > 0 ? (
                            filteredBoxes.map((box) => (
                                <DetailCard key={box.title} {...box} />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-12">
                                <i className="fa fa-search text-5xl text-gold/30 mb-4"></i>
                                <p className="text-white/50 text-lg">未找到匹配的盲盒，请尝试其他关键词</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}    