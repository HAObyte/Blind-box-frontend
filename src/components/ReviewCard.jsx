import React from "react";

export default function ReviewCard({ avatar, name, comment, photos = [] }) {
    return (
        <div className="bg-luxury-gray border border-gold/20 rounded-xl p-6 shadow hover:shadow-gold transition-all duration-300">
            <div className="flex items-center mb-4">
                <img
                    src={avatar}
                    alt={name}
                    /*className="w-12 h-12 rounded-full border-2 border-gold object-cover mr-4"*/
                    height="50px"
                />
                <div>
                    <h4 className="text-gold font-elegant text-lg">{name}</h4>
                    <p className="text-white/60 text-sm">来自幸运用户的真实评价</p>
                </div>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">{comment}</p>

            {/* 晒图 */}
            {photos.length > 0 && (
                <div className="grid grid-cols-3 gap-2">
                    {photos.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`晒单图 ${index + 1}`}
                            /*className="w-full h-24 object-cover rounded-md border border-gold/10 hover:scale-105 transition-transform"*/
                            height="100px"

                        />
                    ))}
                </div>
            )}
        </div>
    );
}
