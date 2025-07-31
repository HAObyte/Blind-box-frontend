import React from "react";
import { useNavigate } from "react-router-dom";

export default function BoxDetailCard({
                                          title,
                                          description,
                                          image,
                                          price,
                                          tags,
                                          onBuyNow
                                      }) {
    const navigate = useNavigate();
    const [quantity, setQuantity] = React.useState(1);

    return (
        <div className="max-w-4xl mx-auto bg-luxury-gray/30 backdrop-blur-md rounded-2xl border border-gold/20 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* 图片区域 */}
                <div className="relative overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    {/* 图片角落的稀有度标签 */}
                    <div className="absolute top-4 left-4 bg-gold text-luxury-black px-3 py-1 rounded-full text-sm font-bold">
                        {tags.includes("UR") ? "UR 顶级稀有" :
                            tags.includes("SSR") ? "SSR 超级稀有" :
                                tags.includes("SR") ? "SR 稀有" : "R 普通"}
                    </div>
                </div>

                {/* 内容区域 */}
                <div className="p-6 md:p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="text-xs bg-gold/10 text-gold px-2 py-0.5 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h2 className="font-elegant text-3xl text-gold mb-4">{title}</h2>

                    <div className="mb-6 text-white/80 leading-relaxed">
                        <p>{description}</p>
                    </div>

                    {/* 价格区域 */}
                    <div className="mb-6">
                        <div className="flex items-end gap-2 mb-2">
                            <span className="text-gold text-3xl font-bold">¥{price.toFixed(2)}</span>
                            <span className="text-white/50 line-through text-sm">¥{Math.round(price * 1.3).toFixed(2)}</span>
                            <span className="bg-red-500/20 text-red-300 text-xs px-2 py-0.5 rounded">限时优惠</span>
                        </div>
                        <p className="text-white/50 text-sm">包含随机款式，惊喜开箱体验</p>
                    </div>

                    {/* 数量选择 */}
                    <div className="flex items-center gap-4 mb-8">
                        <span className="text-white/70">数量:</span>
                        <div className="flex items-center border border-gold/30 rounded-lg overflow-hidden">
                            <button
                                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                className="w-10 h-10 flex items-center justify-center bg-luxury-black/50 text-white hover:bg-luxury-black/80 transition-colors"
                            >
                                <i className="fa fa-minus"></i>
                            </button>
                            <input
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                className="w-16 h-10 bg-transparent text-center text-white border-x border-gold/30 focus:outline-none"
                                min="1"
                            />
                            <button
                                onClick={() => setQuantity(prev => prev + 1)}
                                className="w-10 h-10 flex items-center justify-center bg-luxury-black/50 text-white hover:bg-luxury-black/80 transition-colors"
                            >
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                        <span className="text-white/50 text-sm">库存: 99+</span>
                    </div>

                    {/* 按钮区域 */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={onBuyNow || (() => navigate('/checkout'))}
                            className="flex-1 py-3 bg-gradient-to-r from-gold to-gold-light text-luxury-black font-modern font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/20 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                            <i className="fa fa-shopping-cart"></i>
                            <span>立即购买</span>
                        </button>
                        <button
                            className="flex-1 py-3 bg-transparent border border-gold/50 text-gold font-modern font-semibold rounded-lg hover:bg-gold/10 hover:border-gold transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                            <i className="fa fa-heart-o"></i>
                            <span>加入收藏</span>
                        </button>
                    </div>

                    {/* 附加信息 */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3">
                                <i className="fa fa-shield text-gold"></i>
                                <div>
                                    <h4 className="text-white text-sm font-medium">正品保障</h4>
                                    <p className="text-white/50 text-xs">官方授权，品质保证</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <i className="fa fa-refresh text-gold"></i>
                                <div>
                                    <h4 className="text-white text-sm font-medium">7天无理由退换</h4>
                                    <p className="text-white/50 text-xs">开箱不满意可退换</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}