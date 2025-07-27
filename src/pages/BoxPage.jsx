import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';

export default function BoxPage() {
    const [isRotating, setIsRotating] = useState(false);
    const boxRef = useRef(null);

    // （保持原有旋转、开箱逻辑）

    return (
        <div className="container mx-auto py-16 px-8 flex flex-col items-center">
            <h2 className="text-4xl font-bold text-center mb-12">
                选购您的 <span className="text-gold-500">奢华盲盒</span>
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-3xl">
                {/* 3D 盲盒容器 */}
                <div
                    ref={boxRef}
                    className="w-64 h-80 bg-gold-500/20 border-4 border-gold-500 rounded-lg flex items-center justify-center cursor-pointer mb-6 md:mb-0 md:mr-12"
                    onMouseEnter={handleRotate}
                    onMouseLeave={() => setIsRotating(false)}
                >
                    <h3 className="text-2xl">image4（盲盒占位）</h3>
                </div>

                <div className="space-y-4 w-full md:w-auto">
                    <p className="text-xl text-center md:text-left">
                        价格：<span className="text-gold-500">¥1299</span>
                    </p>
                    <p className="text-gray-400 text-center md:text-left">
                        包含：奢华手办 ×1、定制证书 ×1、神秘礼品 ×1
                    </p>
                    <button
                        className="px-6 py-3 bg-gold-500 text-black font-bold rounded-lg hover:bg-gold-600 transition block mx-auto md:mx-0"
                        onClick={handleOpen}
                    >
                        立即开箱
                    </button>
                </div>
            </div>
        </div>
    );
}