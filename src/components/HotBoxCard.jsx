import React from "react";
export default function HotBoxCard({ title, image, price, tags = [] }) {
    return (
        <div className="group relative overflow-hidden rounded-lg shine-effect">
            <div className="group relative bg-luxury-gray border border-gold/20 rounded-xl shadow-gold hover:shadow-gold-md overflow-hidden transition-all duration-300 w-300 md:w-[150%] lg:w-full">
            <img
                src={image}
                alt={title}
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
        </div>
    );
}