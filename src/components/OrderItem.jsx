import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faMapMarkerAlt, faClock, faCreditCard, faBox } from '@fortawesome/free-solid-svg-icons';

export default function OrderItem({ order, statusConfig }) {
    const [expanded, setExpanded] = useState(false);
    const status = statusConfig[order.status] || statusConfig[Object.keys(statusConfig)[0]];

    // 安全处理金额，避免null/undefined
    const formatAmount = (amount) => {
        if (amount === null || amount === undefined) return '¥0.00';
        return `¥${parseFloat(amount).toFixed(2)}`;
    };

    // 切换订单详情展开/收起
    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    // 处理订单状态变更
    const handleStatusChange = (newStatus) => {
        // 这里可以添加状态变更的逻辑
        console.log(`订单 ${order.id} 状态变更为: ${newStatus}`);
    };

    return (
        <div className="bg-gray-900/60 backdrop-blur-sm border border-amber-900/30 rounded-xl shadow-lg shadow-amber-900/10 overflow-hidden transition-all duration-300 hover:border-amber-700/50 hover:shadow-amber-900/20">
            {/* 订单头部 */}
            <div className="p-5 cursor-pointer" onClick={toggleExpand}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="text-gray-300 font-medium">订单号: {order.id || '未知订单号'}</span>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status.class}`}>
                                <span className={`w-2 h-2 rounded-full mr-1 ${status.badgeClass}`}></span>
                                {status.text}
                            </span>
                        </div>
                        <div className="mt-2 flex items-center text-gray-400 text-sm">
                            <FontAwesomeIcon icon={faClock} className="mr-1.5 text-amber-500" />
                            <span>下单时间: {order.createTime ? new Date(order.createTime).toLocaleString() : '未知时间'}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-xl font-serif font-bold text-amber-400">{formatAmount(order.totalAmount)}</span>
                        <button
                            className="text-amber-500 hover:text-amber-400 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleExpand();
                            }}
                        >
                            <FontAwesomeIcon icon={expanded ? faChevronUp : faChevronDown} />
                        </button>
                    </div>
                </div>
            </div>

            {/* 订单详情 */}
            {expanded && (
                <div className="border-t border-amber-900/30 p-5 animate-fadeIn bg-gray-900/80">
                    {/* 商品列表 */}
                    <div className="mb-6">
                        <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3 flex items-center">
                            <FontAwesomeIcon icon={faBox} className="mr-2 h-4 w-4" />
                            商品信息
                        </h3>
                        <div className="space-y-4">
                            {order.items && order.items.length > 0 ? (
                                order.items.map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 pb-4 border-b border-gray-800 last:border-0">
                                        <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-800 flex-shrink-0 border border-amber-900/30">
                                            <img
                                                src={item.image || 'https://via.placeholder.com/80'}
                                                alt={item.title || '商品图片'}
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-gray-100 font-medium truncate">{item.title || '未知商品'}</h4>
                                            <div className="text-gray-400 text-sm mt-1">
                                                单价: {formatAmount(item.price)} × 数量: {item.quantity || 1}
                                            </div>
                                        </div>
                                        <div className="text-amber-400 font-medium">
                                            {formatAmount(item.price && item.quantity ? item.price * item.quantity : 0)}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-gray-500 text-center py-4 bg-gray-800/50 rounded-lg">无商品信息</div>
                            )}
                        </div>
                    </div>

                    {/* 订单信息 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-800/50 p-4 rounded-lg border border-amber-900/20">
                            <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-2 flex items-center">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 h-4 w-4" />
                                收货地址
                            </h3>
                            <p className="text-gray-300">{order.address || '未填写地址'}</p>
                        </div>

                        <div className="bg-gray-800/50 p-4 rounded-lg border border-amber-900/20">
                            <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-2 flex items-center">
                                <FontAwesomeIcon icon={faCreditCard} className="mr-2 h-4 w-4" />
                                支付方式
                            </h3>
                            <p className="text-gray-300">
                                {order.paymentMethod === 'card' ? '银行卡' :
                                    order.paymentMethod === 'wechat' ? '微信支付' :
                                        order.paymentMethod === 'alipay' ? '支付宝' : '未选择支付方式'}
                            </p>
                        </div>
                    </div>

                    {/* 操作按钮 */}
                    <div className="flex justify-end gap-3 pt-2 border-t border-amber-900/30">
                        {order.status === 'pending' && (
                            <>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleStatusChange('cancelled');
                                    }}
                                    className="px-4 py-2 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
                                >
                                    取消订单
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleStatusChange('paid');
                                    }}
                                    className="px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 text-gray-900 rounded-lg hover:from-amber-500 hover:to-amber-400 transition-all shadow-lg shadow-amber-900/20"
                                >
                                    去支付
                                </button>
                            </>
                        )}

                        {order.status === 'paid' && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleStatusChange('shipped');
                                }}
                                className="px-4 py-2 border border-amber-900/50 text-amber-400 rounded-lg hover:bg-amber-900/10 transition-colors"
                            >
                                查看物流
                            </button>
                        )}

                        {order.status === 'shipped' && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleStatusChange('delivered');
                                }}
                                className="px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 text-gray-900 rounded-lg hover:from-amber-500 hover:to-amber-400 transition-all shadow-lg shadow-amber-900/20"
                            >
                                确认收货
                            </button>
                        )}

                        {order.status === 'delivered' && (
                            <button
                                className="px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 text-gray-900 rounded-lg hover:from-amber-500 hover:to-amber-400 transition-all shadow-lg shadow-amber-900/20"
                            >
                                申请售后
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
