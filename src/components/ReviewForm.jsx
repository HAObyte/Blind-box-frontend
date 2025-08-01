// src/components/ReviewForm.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ReviewForm() {
    const [formData, setFormData] = useState({
        name: '',
        comment: '',
        rating: 5,
        photos: []
    });
    const [previewImages, setPreviewImages] = useState([]);
    const navigate = useNavigate();

    // 处理表单输入变化
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // 处理评分变化
    const handleRatingChange = (newRating) => {
        setFormData(prev => ({ ...prev, rating: newRating }));
    };

    // 处理图片上传预览
    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        if (files.length) {
            // 生成预览图
            const previews = files.map(file => URL.createObjectURL(file));
            setPreviewImages(prev => [...prev, ...previews]);
            // 存储图片信息（实际项目中会上传到服务器）
            setFormData(prev => ({
                ...prev,
                photos: [...prev.photos, ...files.map(file => URL.createObjectURL(file))]
            }));
        }
    };

    // 提交评论
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.comment) return;

        // 获取现有评论
        const existingReviews = JSON.parse(localStorage.getItem('reviews') || JSON.stringify(reviews));

        // 创建新评论
        const newReview = {
            ...formData,
            avatar: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/100/100`,
            date: new Date().toISOString().split('T')[0],
            likes: 0,
            id: Date.now() // 添加唯一ID
        };

        // 保存到本地存储
        localStorage.setItem('reviews', JSON.stringify([newReview, ...existingReviews]));

        // 重置表单
        setFormData({ name: '', comment: '', rating: 5, photos: [] });
        setPreviewImages([]);

        // 刷新评论页
        navigate('/review', { replace: true });
        window.location.reload();
    };

    return (
        <form onSubmit={handleSubmit} className="bg-luxury-gray border border-gold/20 rounded-xl p-6 mb-8">
            <h3 className="font-elegant text-2xl text-white mb-6">发布您的评论</h3>

            <div className="space-y-6">
                {/* 用户名输入 */}
                <div>
                    <label className="block text-white/70 mb-2">您的昵称</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-luxury-black/50 border border-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                        placeholder="请输入您的昵称"
                    />
                </div>

                {/* 评论内容 */}
                <div>
                    <label className="block text-white/70 mb-2">评论内容</label>
                    <textarea
                        name="comment"
                        value={formData.comment}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-luxury-black/50 border border-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors h-32"
                        placeholder="分享您的盲盒体验..."
                    ></textarea>
                </div>

                {/* 评分 */}
                <div>
                    <label className="block text-white/70 mb-2">评分</label>
                    <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map(star => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => handleRatingChange(star)}
                                className={`text-2xl ${star <= formData.rating ? 'text-gold' : 'text-white/30'}`}
                            >
                                ★
                            </button>
                        ))}
                    </div>
                </div>

                {/* 图片上传 */}
                <div>
                    <label className="block text-white/70 mb-2">上传图片（可选）</label>
                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full text-white/70"
                    />

                    {/* 图片预览 */}
                    {previewImages.length > 0 && (
                        <div className="grid grid-cols-6 gap-2 mt-3">
                            {previewImages.map((src, index) => (
                                <div key={index} className="relative">
                                    <img
                                        src={src}
                                        alt={`预览图 ${index + 1}`}
                                        className="w-full aspect-square object-cover rounded-md border border-gold/10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => {
                                            // 移除图片
                                            const newPreviews = [...previewImages];
                                            const newPhotos = [...formData.photos];
                                            newPreviews.splice(index, 1);
                                            newPhotos.splice(index, 1);
                                            setPreviewImages(newPreviews);
                                            setFormData(prev => ({ ...prev, photos: newPhotos }));
                                        }}
                                        className="absolute top-1 right-1 bg-black/50 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* 提交按钮 */}
                <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-gold to-gold-light text-luxury-black font-modern font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/20 transform hover:-translate-y-1 transition-all duration-300"
                >
                    发布评论
                </button>
            </div>
        </form>
    );
}