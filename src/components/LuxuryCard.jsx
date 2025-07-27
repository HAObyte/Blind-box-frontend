import React from 'react';

export default function LuxuryCard({ title, desc, image, price, onHoverEffect }) {
    return (
        <div
            className="luxury-card bg-black/30 backdrop-blur-md p-6 rounded-lg border-2 border-gold-500 transition-all flex flex-col items-center"
            onMouseEnter={onHoverEffect}
            onMouseLeave={() => {
                document.querySelector('.luxury-card').style.boxShadow = 'none';
            }}
        >
            <div className="mb-4 text-center">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-gray-400">{desc}</p>
            </div>
            <div className="bg-gray-800/50 h-40 w-full flex items-center justify-center mb-4">
                <span className="text-xl">{image}</span>
            </div>
            <p className="text-xl font-bold self-end">{price}</p>
        </div>
    );
}