import { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

export default function OrderManagement() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    // 获取订单列表
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const userId = localStorage.getItem('currentUser') || 1;
                const response = await axios.get(`/api/orders?user_id=${userId}`);
                setOrders(response.data.orders);
            } catch (error) {
                console.error('获取订单失败:', error);
                alert('加载订单失败，请重试');
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    // 订单状态中文映射
    const statusMap = {
        'pending': '待付款',
        'paid': '已付款',
        'shipped': '已发货',
        'delivered': '已送达',
        'cancelled': '已取消'
    };

    if (loading) {
        return (
            <>
                <NavBar />
                <div className="flex justify-center items-center min-h-screen bg-luxury-black">
                    <div className="text-gold text-xl">加载订单中...</div>
                </div>
            </>
        );
    }

    return (
        <>
            <NavBar />
            <section className="py-16 bg-luxury-black min-h-screen">
                <div className="container mx-auto px-4">
                    <h2 className="font-elegant text-3xl text-white mb-8">我的订单</h2>

                    {orders.length === 0 ? (
                        <div className="text-center py-10 bg-luxury-gray/20 rounded-xl border border-gold/10">
                            <i className="fa fa-shopping-bag text-5xl text-gold/30 mb-4"></i>
                            <p className="text-white/50 text-lg">暂无订单记录</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {orders.map(order => (
                                <div key={order.id} className="bg-luxury-gray/20 rounded-xl border border-gold/10 p-6 hover:border-gold/30 transition-colors">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        {/* 商品信息 */}
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={order.product_image}
                                                alt={order.product_name}
                                                className="w-20 h-20 object-cover rounded-lg border border-gold/20"
                                            />
                                            <div>
                                                <h3 className="text-white font-medium">{order.product_name}</h3>
                                                <p className="text-white/50 text-sm">数量: {order.quantity}</p>
                                                <p className="text-white/50 text-sm">地址: {order.address}</p>
                                            </div>
                                        </div>

                                        {/* 订单信息 */}
                                        <div className="flex flex-col items-end gap-2">
                                            <span className="text-gold font-bold">¥{order.total.toFixed(2)}</span>
                                            <span className={`px-3 py-1 rounded-full text-sm ${
                                                order.status === 'pending' ? 'bg-yellow-500/20 text-yellow-300' :
                                                    order.status === 'paid' ? 'bg-green-500/20 text-green-300' :
                                                        'bg-gray-500/20 text-gray-300'
                                            }`}>
                                                {statusMap[order.status] || order.status}
                                            </span>
                                            <p className="text-white/40 text-sm">订单号: {order.order_number}</p>
                                            <p className="text-white/40 text-sm">
                                                {new Date(order.created_at).toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
}