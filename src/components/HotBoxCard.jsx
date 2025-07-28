import React from "react";

export default function HotBoxCard({ title, image, price, tags = [] }) {
    return (
        <div className="w-64 shrink-0 bg-luxury-gray rounded-xl overflow-hidden border border-gold/20 shadow hover:shadow-gold transition duration-300">
            <img
                src={image}
                alt={title}
                className="w-full h-40 object-cover"
            />
            <div className="p-4">
                <h3 className="font-elegant text-gold text-lg mb-2">{title}</h3>
                <p className="text-white/70 text-sm mb-3">¥ {price.toFixed(2)}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="text-xs bg-gold/10 text-gold px-2 py-0.5 rounded-full"
                        >
              {tag}
            </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
