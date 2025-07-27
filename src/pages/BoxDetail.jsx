// src/pages/BoxDetail.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const BoxDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [boxDetails, setBoxDetails] = useState(null);
    const [isOpening, setIsOpening] = useState(false);
    const [boxOpened, setBoxOpened] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const boxRef = useRef(null);
    const contentRef = useRef(null);
    const revealRef = useRef(null);

    // 模拟加载盲盒详情
    useEffect(() => {
        // 这里可以替换为真实API调用
        const boxes = {
            1: {
                id: 1,
                title: "钻石典藏版",
                image: "https://picsum.photos/id/1062/800/600",
                price: "¥1,999",
                rarity: "限量发行",
                description: "我们最顶级的典藏系列，每一个盲盒都包含一件18K金徽章和一件限量艺术品，全球限量发行999份。",
                contents: [
                    { name: "18K金徽章", image: "https://picsum.photos/id/1074/400/400" },
                    { name: "限量版画", image: "https://picsum.photos/id/1080/400/400" },
                    { name: "专属收藏证书", image: "https://picsum.photos/id/1082/400/400" }
                ],
                features: [
                    "全球限量999份",
                    "含真品证书",
                    "高级礼盒包装",
                    "100% 中奖率"
                ],
                reviews: [
                    { name: "张先生", rating: 5, text: "非常惊喜！开出了稀有的金徽章，做工精美，绝对值得收藏。" },
                    { name: "李女士", rating: 4, text: "包装很奢华，打开的瞬间感觉很有仪式感，里面的艺术品也很棒。" }
                ],
                related: [2, 3, 4]
            },
            2: {
                id: 2,
                title: "皇家尊享盒",
                image: "https://picsum.photos/id/1067/800/600",
                price: "¥2,999",
                rarity: "VIP限定",
                description: "专为尊贵客户打造的系列，内含皇室定制珠宝和专属证书，彰显非凡身份。",
                // 其他字段...
            },
            3: {
                id: 3,
                title: "神秘黑金卡",
                image: "https://picsum.photos/id/1070/800/600",
                price: "¥3,999",
                rarity: "顶级稀有",
                description: "全球仅发行99份，包含独家收藏品，是收藏家的终极目标，极具投资价值。",
                // 其他字段...
            },
            // 更多盲盒配置...
        };

        setBoxDetails(boxes[id] || boxes[1]);
    }, [id]);

    // 开箱动画
    const handleOpenBox = () => {
        if (isOpening || boxOpened) return;

        setIsOpening(true);

        const box = boxRef.current;
        const content = contentRef.current;
        const reveal = revealRef.current;

        // 第一阶段：盒子震动
        gsap.to(box, {
            x: 10,
            y: 5,
            rotate: 2,
            duration: 0.1,
            repeat: 10,
            yoyo: true,
            onComplete: () => {
                // 第二阶段：盒子打开
                gsap.to(box, {
                    scale: 1.2,
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        // 第三阶段：显示内容
                        gsap.fromTo(reveal, {
                            opacity: 0,
                            scale: 0.8
                        }, {
                            opacity: 1,
                            scale: 1,
                            duration: 0.7,
                            ease: 'elastic.out(1, 0.3)',
                            onComplete: () => {
                                setBoxOpened(true);
                                setIsOpening(false);
                            }
                        });
                    }
                });
            }
        });
    };

    const addToCart = () => {
        // 模拟添加到购物车
        alert(`${boxDetails.title} 已添加到购物车！`);
        navigate('/cart');
    };

    if (!boxDetails) {
        return <div className="py-12 text-center">加载中...</div>;
    }

    return (
        <div className="py-16 px-6">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* 盲盒图片和预览 */}
                    <div className="md:w-1/2 flex flex-col items-center">
                        <div className="relative mb-8 w-full">
                            {!boxOpened ? (
                                <div
                                    ref={boxRef}
                                    className="w-full h-[500px] rounded-xl relative cursor-pointer bg-gradient-to-br from-gray-800 to-gray-700 border-2 border-gold-400 shadow-2xl shadow-gold-500/20"
                                    onClick={handleOpenBox}
                                >
                                    <div className="absolute inset-4 bg-gradient-to-tr from-gray-900 to-gray-800 rounded-lg"></div>

                                    {/* 盲盒图片 */}
                                    <div className="absolute inset-6 rounded-md overflow-hidden">
                                        <img src={boxDetails.image} alt={boxDetails.title} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-gold-500/10"></div>
                                    </div>

                                    {/* 3D 高光效果 */}
                                    <div className="absolute w-64 h-64 bg-white/20 rounded-full blur-3xl opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

                                    {/* 标签 */}
                                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gold-500 text-black px-6 py-2 rounded-full font-bold text-sm md:text-base shadow-lg">
                                        点击开启
                                    </div>
                                </div>
                            ) : (
                                <div ref={revealRef} className="w-full h-[500px] rounded-xl relative bg-gradient-to-br from-gray-800/30 to-gray-700/30 border-2 border-gold-400/50 backdrop-blur-sm">
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                                        <h3 className="text-2xl font-bold text-gold-400 mb-4">恭喜您获得</h3>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                                            {boxDetails.contents.map((item, index) => (
                                                <div key={index} className="bg-black/50 p-4 rounded-lg border border-gold-400/30 text-center">
                                                    <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg mx-auto mb-2" />
                                                    <p className="font-medium">{item.name}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* 缩略图 */}
                        <div className="flex space-x-4 w-full overflow-x-auto pb-2">
                            <div className="w-20 h-20 rounded-md overflow-hidden border-2 border-gold-400 cursor-pointer">
                                <img src={boxDetails.image} alt="主图" className="w-full h-full object-cover" />
                            </div>
                            {/* 其他缩略图... */}
                        </div>
                    </div>

                    {/* 盲盒详情 */}
                    <div className="md:w-1/2">
                        <div className="bg-gray-800/50 backdrop-blur-md p-8 rounded-xl border border-gold-400/30">
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-3xl font-bold">{boxDetails.title}</h2>
                                <span className="text-xs px-3 py-1 bg-gold-500 text-black rounded-full font-bold">
                  {boxDetails.rarity}
                </span>
                            </div>

                            {/* 评分 */}
                            <div className="flex items-center mb-6">
                                <div className="flex text-gold-400">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfAlt} />
                                </div>
                                <span className="ml-2 text-gray-400">4.5 (128 评价)</span>
                            </div>

                            <div className="mb-6">
                                <span className="text-gold-400 text-3xl font-bold">{boxDetails.price}</span>
                                <span className="ml-2 text-gray-400 line-through text-lg">¥2,499</span>
                            </div>

                            <p className="text-gray-300 mb-8">{boxDetails.description}</p>

                            <div className="mb-8">
                                <h3 className="font-bold text-lg mb-4">盲盒特色</h3>
                                <ul className="space-y-2">
                                    {boxDetails.features.map((feature, index) => (
                                        <li key={index} className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-gold-400 mr-2">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* 数量选择 */}
                            <div className="flex items-center mb-8">
                                <label className="mr-4 font-medium">数量:</label>
                                <div className="flex border border-gray-700 rounded-lg">
                                    <button
                                        className="px-4 py-2 bg-gray-800 hover:bg-gray-700 transition-colors"
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        value={quantity}
                                        className="w-16 text-center bg-gray-900 border-x border-gray-700"
                                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                    />
                                    <button
                                        className="px-4 py-2 bg-gray-800 hover:bg-gray-700 transition-colors"
                                        onClick={() => setQuantity(quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <button
                                    className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-black font-bold rounded-lg hover:shadow-xl hover:shadow-gold-500/30 transition-all duration-300 transform hover:scale-105 flex-1"
                                    onClick={addToCart}
                                >
                                    立即购买
                                </button>
                                <button className="px-6 py-4 bg-transparent border border-gold-400 text-gold-400 rounded-lg hover:bg-gold-500/10 transition-colors">
                                    <i className="fas fa-heart"></i> 加入收藏
                                </button>
                            </div>
                        </div>

                        {/* 评价 */}
                        <div className="mt-8 bg-gray-800/50 backdrop-blur-md p-6 rounded-xl border border-gold-400/30">
                            <h3 className="text-xl font-bold mb-4">用户评价</h3>

                            {boxDetails.reviews.map((review, index) => (
                                <div key={index} className="border-b border-gray-700 pb-4 mb-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-medium">{review.name}</h4>
                                        <div className="flex text-gold-400">
                                            {Array(review.rating).fill().map((_, i) => (
                                                <FontAwesomeIcon key={i} icon={faStar} />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-300">{review.text}</p>
                                </div>
                            ))}

                            <button className="text-gold-400 hover:underline">查看全部评价</button>
                        </div>
                    </div>
                </div>

                {/* 相关盲盒推荐 */}
                <div className="mt-20">
                    <h3 className="text-2xl font-bold mb-8">您可能也喜欢</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {/* 推荐盲盒项 */}
                        {boxDetails.related.map((relatedId) => {
                            const relatedBox = boxes[relatedId] || boxes[1];
                            return (
                                <div key={relatedId} className="bg-gray-800/30 rounded-lg overflow-hidden border border-gold-400/20 hover:border-gold-400/50 transition-all group">
                                    <div className="relative h-48 overflow-hidden">
                                        <img src={relatedBox.image} alt={relatedBox.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="p-4">
                                        <h4 className="font-bold mb-2">{relatedBox.title}</h4>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gold-400 font-bold">{relatedBox.price}</span>
                                            <button className="text-xs bg-gold-500/20 hover:bg-gold-500/40 text-gold-400 px-2 py-1 rounded transition-colors">
                                                查看详情
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoxDetail;