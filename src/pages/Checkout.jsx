import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Checkout() {
    // 获取从卡片传递过来的盲盒信息
    const location = useLocation();
    const { box } = location.state || {};
    const navigate = useNavigate();

    // 新增：数量状态管理
    const [quantity, setQuantity] = useState(1);
    // 根据盲盒类型设置最大库存（使用现有数据推断）
    const maxStock = box?.tags?.includes('限量版') || box?.tags?.includes('限时') || box?.rarity === '顶级稀有'
        ? 10
        : 99;

    // 新增：数量变化处理函数
    const handleQuantityChange = (newQuantity) => {
        // 确保数量在1和最大库存之间
        if (newQuantity >= 1 && newQuantity <= maxStock) {
            setQuantity(newQuantity);
        }
    };

    // 新增：当组件加载或盲盒信息变化时重置数量
    useEffect(() => {
        setQuantity(1);
    }, [box]);

    // 如果没有传递盲盒信息，返回盲盒列表
    if (!box) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl text-gold mb-4">未找到商品信息</h2>
                    <button
                        onClick={() => navigate('/box-list')}
                        className="bg-gold text-luxury-black px-6 py-2 rounded-lg hover:bg-gold-light transition-colors"
                    >
                        返回盲盒列表
                    </button>
                </div>
            </div>
        );
    }

    // 计算总价
    const totalPrice = (box.price * quantity).toFixed(2);

    return (
        <div className="bg-gradient-to-br from-luxury-black to-luxury-gray min-h-screen">
            <NavBar />

            <div className="container mx-auto px-4 py-12">
                <h1 className="font-elegant text-3xl md:text-4xl text-gold mb-8 text-center">结算中心</h1>

                <div className="max-w-4xl mx-auto bg-luxury-gray/80 backdrop-blur-md rounded-2xl shadow-xl border border-gold/20 overflow-hidden">
                    {/* 商品信息 */}
                    <div className="p-6 border-b border-gold/20">
                        <h2 className="font-elegant text-2xl text-white mb-4">商品信息</h2>
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* 商品图片 */}
                            <div className="w-full md:w-1/3">
                                <img
                                    src={box.image}
                                    alt={box.title}
                                    className="w-full h-64 object-cover rounded-lg border border-gold/30"
                                />
                            </div>

                            {/* 商品详情 */}
                            <div className="w-full md:w-2/3 flex flex-col justify-center">
                                <h3 className="font-elegant text-2xl text-gold mb-2">{box.title}</h3>
                                <p className="text-white/70 mb-4">{box.description}</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-2xl text-white font-bold">¥{box.price}</span>
                                    <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm">
                                        库存: {maxStock}件
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 结算信息 */}
                    <div className="p-6">
                        <h2 className="font-elegant text-2xl text-white mb-6">结算信息</h2>

                        <div className="space-y-6">
                            {/* 数量选择 - 完善版 */}
                            <div>
                                <label className="block text-white/70 mb-2">购买数量</label>
                                <div className="flex items-center w-32">
                                    <button
                                        className={`bg-luxury-black text-white w-10 h-10 rounded-l-lg border border-gold/30 transition-colors ${
                                            quantity <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gold/10'
                                        }`}
                                        onClick={() => handleQuantityChange(quantity - 1)}
                                        disabled={quantity <= 1}
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        min="1"
                                        max={maxStock}
                                        value={quantity}
                                        onChange={(e) => {
                                            // 处理手动输入的情况
                                            const inputValue = parseInt(e.target.value, 10);
                                            if (!isNaN(inputValue)) {
                                                handleQuantityChange(inputValue);
                                            }
                                        }}
                                        className="w-12 h-10 text-center bg-luxury-black border-y border-gold/30 text-white"
                                    />
                                    <button
                                        className={`bg-luxury-black text-white w-10 h-10 rounded-r-lg border border-gold/30 transition-colors ${
                                            quantity >= maxStock ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gold/10'
                                        }`}
                                        onClick={() => handleQuantityChange(quantity + 1)}
                                        disabled={quantity >= maxStock}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* 收货地址 */}
                            <div>
                                <label className="block text-white/70 mb-2">收货地址</label>
                                <textarea
                                    placeholder="请输入收货地址"
                                    className="w-full bg-luxury-black/50 border border-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors h-24"
                                ></textarea>
                            </div>

                            {/* 支付方式 */}
                            <div>
                                <label className="block text-white/70 mb-2">支付方式</label>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="bg-luxury-black/50 border border-gold/30 rounded-lg p-3 cursor-pointer hover:border-gold transition-colors">
                                        <i className="fa fa-credit-card text-gold mb-1"></i>
                                        <p className="text-white text-sm">银行卡</p>
                                    </div>
                                    <div className="bg-luxury-black/50 border border-gold/30 rounded-lg p-3 cursor-pointer hover:border-gold transition-colors">
                                        <i className="fa fa-wechat text-gold mb-1"></i>
                                        <p className="text-white text-sm">微信支付</p>
                                    </div>
                                    <div className="bg-luxury-black/50 border border-gold/30 rounded-lg p-3 cursor-pointer hover:border-gold transition-colors">
                                        <i className="fa fa-paypal text-gold mb-1"></i>
                                        <p className="text-white text-sm">支付宝</p>
                                    </div>
                                </div>
                            </div>

                            {/* 订单总结 - 同步数量变化 */}
                            <div className="border-t border-gold/20 pt-4">
                                <div className="flex justify-between mb-2">
                                    <span className="text-white/70">商品单价</span>
                                    <span className="text-white">¥{box.price}</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-white/70">数量</span>
                                    <span className="text-white">{quantity}</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-white/70">运费</span>
                                    <span className="text-white">免费</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold mt-4">
                                    <span className="text-gold">总计</span>
                                    <span className="text-white">¥{totalPrice}</span>
                                </div>
                            </div>

                            {/* 提交订单按钮 */}
                            <button className="w-full py-3 bg-gradient-to-r from-gold to-gold-light text-luxury-black font-modern font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/20 transform hover:-translate-y-1 transition-all duration-300">
                                提交订单
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
