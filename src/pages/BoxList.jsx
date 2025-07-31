// src/pages/BoxList.jsx
import DetailCard from "../components/DetailCard.jsx";
import NavBar from "../components/NavBar.jsx";
import React, { useState } from "react";
import {boxes} from "../data/boxData.jsx"; // 修复导入方式（移除花括号）
import Footer from "../components/Footer.jsx";

export default function BoxList() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeSeries, setActiveSeries] = useState('all');

    // 修复：定义allSeries（之前遗漏导致报错）
    const allSeries = ['all', ...Array.from(new Set(boxes.map(box => box.series)))];

    // 修复搜索和筛选逻辑（同时应用搜索和系列筛选）
    const filteredBoxes = boxes.filter(box => {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch =
            box.title.toLowerCase().includes(searchLower) ||
            box.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
            box.series.toLowerCase().includes(searchLower); // 恢复系列搜索

        const matchesSeries = activeSeries === 'all' || box.series === activeSeries;

        return matchesSearch && matchesSeries; // 同时满足搜索和系列筛选
    });

    return (
        <>
            <NavBar/>
            <section className="py-16 bg-luxury-black relative">
                <div className="container mx-auto px-4">
                    {/* 标题区域 */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                        <div>
                            <h2 className="font-elegant text-3xl md:text-4xl text-white mb-2">我们的所有盲盒</h2>
                            <p className="text-white/50">找到你心仪的收藏</p>
                        </div>
                        <span className="text-gold text-sm self-end">
                            {filteredBoxes.length} / {boxes.length} 个结果
                        </span>
                    </div>

                    {/* 搜索框和系列筛选 */}
                    <div className="mb-10 space-y-6">
                        {/* 搜索框 */}
                        <div className="relative max-w-2xl mx-auto">
                            <input
                                type="text"
                                placeholder="搜索盲盒名称、标签或系列..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-luxury-gray/30 border border-gold/20 rounded-full py-3 px-6 pl-12 text-white focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                            />
                            <i className="fa fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gold/70"></i>
                        </div>

                        {/* 系列筛选标签 */}
                        <div className="flex flex-wrap gap-2 justify-center">
                            {allSeries.map(series => (
                                <button
                                    key={series}
                                    onClick={() => setActiveSeries(series)}
                                    className={`
                                        px-4 py-2 rounded-full text-sm transition-all
                                        ${activeSeries === series
                                        ? 'bg-gold text-luxury-black'
                                        : 'bg-luxury-gray/30 text-white/70 hover:bg-luxury-gray/50'
                                    }
                                    `}
                                >
                                    {series === 'all' ? '全部系列' : series}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 盲盒列表 */}
                    <div className="grid gap-8 "> {/* 修复网格布局（sm:grid-cols-2） */}
                        {filteredBoxes.length > 0 ? (
                            <DetailCard boxes={filteredBoxes} />
                        ) : (
                            <div className="col-span-full text-center py-12">
                                <i className="fa fa-search text-5xl text-gold/30 mb-4"></i>
                                <p className="text-white/50 text-lg">未找到匹配的盲盒，请尝试其他关键词</p>
                                <button
                                    onClick={() => {setSearchTerm(''); setActiveSeries('all');}}
                                    className="mt-4 text-gold hover:text-gold-light transition-colors"
                                >
                                    查看全部盲盒
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}