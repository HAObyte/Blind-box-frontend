// src/components/ReviewCard.jsx
export default function ReviewCard({ avatar, name, comment, photos = [], rating, date, likes }) {
    return (
        <article className="w-full bg-luxury-gray border border-gold/20 rounded-xl p-6 shadow hover:shadow-gold transition-all duration-300">
            {/* 用户信息部分 */}
            <header className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <img
                        src={avatar}
                        alt={name}
                        className="w-12 h-12 rounded-full border-2 border-gold object-cover mr-4"
                    />
                    <div>
                        <h4 className="text-gold font-elegant text-lg">{name}</h4>
                        <p className="text-white/60 text-sm">{date || "2025-7-29"}</p>
                    </div>
                </div>

                {/* 评分和点赞 */}
                <div className="text-right">
                    <div className="flex items-center justify-end text-gold mb-1">
                        {[1, 2, 3, 4, 5].map(star => (
                            <span key={star} className={star <= rating ? "text-gold" : "text-white/30"}>★</span>
                        ))}
                        <span className="ml-2 text-white/70">{rating}</span>
                    </div>
                    {likes > 0 && (
                        <p className="text-white/60 text-sm flex items-center justify-end">
                            <i className="fa fa-thumbs-up mr-1"></i> {likes}
                        </p>
                    )}
                </div>
            </header>

            <div className="prose prose-sm text-white/80 mb-4">
                <p>{comment}</p>
            </div>

            {photos.length > 0 && (
                <div className="grid grid-cols-6 gap-2">
                    {photos.map((src, index) => (
                        <div key={index} className="overflow-hidden rounded-md border border-gold/10 group">
                            <div className="w-full aspect-square flex items-center justify-center p-1">
                                <img
                                    src={src}
                                    alt={`晒单图 ${index + 1}`}
                                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </article>
    );
}