import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {
    FaBox,
    FaMapMarkerAlt,
    FaClock,
    FaCreditCard,
    FaCheckCircle,
    FaTruck,
    FaTimesCircle,
    FaHourglassHalf
} from 'react-icons/fa';
import {Link} from "react-router-dom";

// 订单状态常量
const OrderStatus = {
    PENDING: 'pending',
    PAID: 'paid',
    SHIPPED: 'shipped',
    DELIVERED: 'delivered',
    CANCELLED: 'cancelled'
};

// 状态文本和图标映射
const statusConfig = {
    [OrderStatus.PENDING]: {
        text: '待付款',
        icon: <FaHourglassHalf className="text-amber-500" />,
        bgClass: 'bg-amber-900/20 text-amber-400',
        borderClass: 'border-amber-500/30'
    },
    [OrderStatus.PAID]: {
        text: '已付款',
        icon: <FaCreditCard className="text-emerald-500" />,
        bgClass: 'bg-emerald-900/20 text-emerald-400',
        borderClass: 'border-emerald-500/30'
    },
    [OrderStatus.SHIPPED]: {
        text: '已发货',
        icon: <FaTruck className="text-blue-500" />,
        bgClass: 'bg-blue-900/20 text-blue-400',
        borderClass: 'border-blue-500/30'
    },
    [OrderStatus.DELIVERED]: {
        text: '已送达',
        icon: <FaCheckCircle className="text-green-500" />,
        bgClass: 'bg-green-900/20 text-green-400',
        borderClass: 'border-green-500/30'
    },
    [OrderStatus.CANCELLED]: {
        text: '已取消',
        icon: <FaTimesCircle className="text-red-500" />,
        bgClass: 'bg-red-900/20 text-red-400',
        borderClass: 'border-red-500/30'
    }
};

export default function OrderManager() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 模拟从API加载订单数据
        const loadOrders = async () => {
            // 实际项目中这里会是API调用
            // const response = await fetch('/api/orders');
            // const data = await response.json();

            // 模拟加载延迟
            setTimeout(() => {
                const storedOrders = JSON.parse(localStorage.getItem('userOrders')) || [];
                // 按时间倒序排序
                setOrders(storedOrders.sort((a, b) => new Date(b.createTime) - new Date(a.createTime)));
                setLoading(false);
            }, 800);
        };

        loadOrders();
    }, []);

    // 加载状态
    if (loading) {
        return (
            <div className="min-h-screen bg-gray-950 text-gray-100">
                <NavBar />
                <div className="container mx-auto px-4 py-16">
                    <div className="flex flex-col items-center justify-center py-16 border border-gray-800 rounded-xl bg-gray-900/50">
                        <div className="w-12 h-12 border-4 border-t-amber-500 border-gray-700 rounded-full animate-spin mb-4"></div>
                        <p className="text-gray-400 text-lg">加载您的尊贵订单...</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    // 无订单状态
    if (orders.length === 0) {
        return (
            <div className="min-h-screen bg-gray-950 text-gray-100">
                <NavBar />
                <div className="container mx-auto px-4 py-16">
                    <div className="text-center py-16 border border-gray-800 rounded-xl bg-gray-900/50">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-900 border border-gray-800 mb-6">
                            <FaBox className="text-3xl text-gray-700" />
                        </div>
                        <h3 className="text-2xl font-serif text-gray-300 mb-2">暂无订单记录</h3>
                        <p className="text-gray-500 max-w-md mx-auto">
                            您的订单将在此展示，立即探索我们的精选商品，保证您的购物体验
                        </p>
                        <button className="mt-8 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-gray-900 font-medium rounded-md hover:from-amber-500 hover:to-amber-400 transition-all duration-300 transform hover:-translate-y-1">
                            <Link to="/box-list">去商场逛逛</Link>
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    // 订单列表
    return (
        <div className="min-h-screen bg-gray-950 text-gray-100">
            <NavBar />
            <div className="container mx-auto px-4 py-12">
                <div className="mb-10">
                    <h1 className="text-3xl md:text-4xl font-serif border-b border-gray-800 pb-4 text-gray-100">
                        我的订单
                    </h1>
                    <p className="text-gray-500 mt-2">查看和管理您的所有订单</p>
                </div>

                <div className="space-y-6">
                    {orders.map(order => (
                        <div
                            key={order.id}
                            className="border border-gray-800 rounded-xl overflow-hidden bg-gray-900/40
                         hover:border-amber-900/50 transition-all duration-300
                         transform hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-900/5"
                        >
                            {/* 订单头部信息 */}
                            <div className="p-6 border-b border-gray-800">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div>
                                        <div className="flex items-center">
                                            <span className="text-gray-400 mr-2">订单编号:</span>
                                            <span className="font-mono text-gray-300">{order.id}</span>
                                        </div>
                                        <div className="flex items-center mt-2 text-sm">
                                            <FaClock className="text-amber-500 mr-2" size={16} />
                                            <span className="text-gray-400">
                        下单时间: {new Date(order.createTime).toLocaleString()}
                      </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusConfig[order.status].bgClass} border ${statusConfig[order.status].borderClass}`}>
                      {statusConfig[order.status].icon}
                        <span className="ml-2">{statusConfig[order.status].text}</span>
                    </span>
                                    </div>
                                </div>
                            </div>

                            {/* 订单商品列表 */}
                            <div className="p-6 divide-y divide-gray-800">
                                {order.items.map((item, index) => (
                                    <div key={index} className="py-4 flex flex-col sm:flex-row gap-4">
                                        <div className="relative w-full sm:w-24 h-24 rounded-md overflow-hidden border border-gray-800">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                            />
                                            <div className="absolute top-2 right-2 bg-gray-900/80 text-amber-400 text-xs px-2 py-1 rounded-md">
                                                x{item.quantity}
                                            </div>
                                        </div>

                                        <div className="flex-1 flex flex-col justify-center">
                                            <h3 className="text-gray-200 font-medium hover:text-amber-400 transition-colors">{item.title}</h3>
                                            <div className="mt-1 flex justify-between items-center">
                                                <span className="text-amber-400 font-medium">¥{item.price}</span>
                                                <span className="text-gray-500 text-sm">单价</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* 收货地址和总计 */}
                            <div className="p-6 bg-gray-900/60 border-t border-gray-800">
                                <div className="flex flex-col md:flex-row justify-between gap-6">
                                    <div>
                                        <h4 className="text-gray-300 font-medium mb-3 flex items-center">
                                            <FaMapMarkerAlt className="text-amber-500 mr-2" size={18} />
                                            收货地址
                                        </h4>
                                        <p className="text-gray-400 text-sm">{order.address}</p>
                                    </div>

                                    <div className="w-full md:w-48 lg:w-64">
                                        <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/80">
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-500">商品总价:</span>
                                                <span className="text-gray-300">¥{order.totalAmount}</span>
                                            </div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-500">运费:</span>
                                                <span className="text-gray-300">¥0.00</span>
                                            </div>
                                            <div className="border-t border-gray-800 my-2 pt-2 flex justify-between">
                                                <span className="text-gray-300 font-medium">实付款:</span>
                                                <span className="text-amber-400 font-bold text-lg">¥{order.totalAmount}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
