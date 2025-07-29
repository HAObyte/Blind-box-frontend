import React from "react";

export default function LuxuryCard({ title, description, image }) {
    return (
        <div className="group relative bg-luxury-gray border border-gold/20 rounded-xl shadow-gold hover:shadow-gold-md overflow-hidden transition-all duration-300">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
                <h3 className="font-elegant text-gold text-xl mb-2">{title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{description}</p>
            </div>
            <div className="absolute top-4 right-4 bg-gold text-luxury-black text-xs px-2 py-1 rounded-full font-bold shadow">
                NEW
            </div>
        </div>
    );
}
