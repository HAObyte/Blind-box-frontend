import React from 'react';
import { useNavigate } from 'react-router-dom';

const DetailCard = ({ boxes }) => {
    const navigate = useNavigate();

    const handleCardClick = (box) => {
        navigate('/checkout', {
            state: { box }
        });
    };
    const handleDetailClick = (box) => {
        navigate('/single-box-detail', {
            state: { box },
        })
    }

    // 修复：增加字段存在性检查，避免访问undefined
    const isLimited = (box) => {
        // 确保box、tags、rarity存在，默认空数组/空字符串避免报错
        const tags = box?.tags || [];
        const rarity = box?.rarity || '';
        return rarity === '顶级稀有' || tags.includes('限量版') || tags.includes('限时');
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
            {/* 修复：遍历前检查boxes是否存在，避免空数组报错 */}
            {(boxes || []).map((box) => (
                // 确保每个box有id，避免key警告
                <div
                    key={box?.id || Math.random()} // 临时用随机数避免key重复（建议数据中确保id存在）
                    className="bg-luxury-gray/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gold/20 hover:border-gold/50 transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
                >
                    {/* 盲盒图片 - 修复image字段访问 */}
                    <div className="relative overflow-hidden h-64">
                        <img
                            src={box?.image || ''} // 增加默认值，避免图片路径undefined
                            alt={box?.title || '盲盒'}

                        />
                        {/* 只在box存在时判断限量版 */}
                        {box && isLimited(box) && (
                            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                限量版
                            </div>
                        )}
                    </div>

                    {/* 盲盒信息 - 增加字段存在性检查 */}
                    <div className="p-5">
                        <h3 className="font-elegant text-xl text-gold mb-2 group-hover:text-gold-light transition-colors">
                            {box?.title || '未知名称'}
                        </h3>
                        <p className="text-white/60 text-sm mb-4 line-clamp-2">
                            {box?.description || '暂无描述'}
                        </p>
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="text-white font-bold text-lg">¥{box?.price || 0}</span>
                                {box?.originalPrice && (
                                    <span className="text-white/50 text-sm line-through ml-2">¥{box.originalPrice}</span>
                                )}
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={()=>handleCardClick(box)} // 修改为新的购买处理函数
                                    className="flex-1 py-3 bg-gradient-to-r from-gold to-gold-light text-luxury-black font-modern font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/20 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
                                >
                                    <span>立即购买</span>
                                </button>
                                <button
                                    onClick={() => handleDetailClick(box)}
                                    className="flex-1 py-3 bg-transparent border border-gold/50 text-gold font-modern font-semibold rounded-lg hover:bg-gold/10 hover:border-gold transition-all duration-300 flex items-center justify-center space-x-2"
                                >
                                    <span> 查看详情 </span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DetailCard;