import React from "react";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import LuxuryCard from "./components/LuxuryCard.jsx";
import HotBoxCard from "./components/HotBoxCard.jsx";
import ReviewCard from "./components/ReviewCard.jsx";
import HomePageAD from "./components/HomePageAD.jsx";

export default function Home() {
    // 分类数据
    const categories = [
        {
            title: "战斗潮流",
            description: "JoJo 系列高人气收藏盲盒，重现热血对决",
            image: "../public/战斗潮流/surface.jpg",
        },
        {
            title: "黄金之风",
            description: "意大利黑帮的荣耀传说，稀有藏品等你来抽",
            image: "../public/黄金之风/surface.jpg",
        },
        {
            title: "不灭钻石",
            description: "镇上的奇妙冒险，和平街的隐藏宝藏",
            image: "../public/不灭钻石/surface.jpg",
        },
        {
            title: "石之海",
            description: "空条徐伦与父亲的命运之战，盲盒新篇章",
            image: "../public/石之海/surface.jpg",
        },
    ];

    // 热门盲盒
    const hotBoxes = [
        {
            title: "绅士乔瑟夫",
            image: "../public/战斗潮流/乔瑟夫.jpg",
            price: 69.9,
            tags: ["SSR", "限时", "动画经典"],
        },
        {
            title: "黄金体验礼盒",
            image: "../public/黄金之风/乔鲁诺.jpg",
            price: 88.8,
            tags: ["UR", "新品"],
        },
        {
            title: "徐伦特典",
            image: "../public/石之海/徐伦.jpg",
            price: 59.9,
            tags: ["SR", "人气榜"],
        },
    ];

    // 用户评价
    const reviews = [
        {
            avatar: "https://picsum.photos/id/101/100/100",
            name: "徐同学",
            comment: "第一次抽就中了 UR Dio，太惊喜了，金光闪闪！",
            photos: [
                "https://picsum.photos/id/100/200/150",
                "https://picsum.photos/id/1011/200/150",
            ],
        },
        {
            avatar: "https://picsum.photos/id/102/100/100",
            name: "阿杰",
            comment: "开盒体验很棒，包装精致，感觉超值。",
            photos: [],
        },
    ];

    return (
        <>
            <NavBar />
            <HomePageAD />

           {/*  Banner
            <section className="relative h-[60vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/banner.jpg')" }}>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl text-gold font-elegant text-shadow text-center">
                        盲盒的世界，等你探索
                    </h1>
                </div>
            </section>*/}

            {/* 分类区域 */}
            <section className="py-20 bg-luxury-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl text-gold font-elegant mb-10 text-center">精选系列</h2>
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {categories.map((item, i) => (
                            <LuxuryCard key={i} {...item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 热门盲盒 */}
            <section className="py-20 bg-luxury-black border-t border-gold/10">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl text-gold font-elegant mb-10 text-center">热门盲盒</h2>
                    <div className="flex gap-6 overflow-x-auto no-scrollbar pb-2">
                        {hotBoxes.map((box, i) => (
                            <HotBoxCard key={i} {...box} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 用户评价 */}
            <section className="py-20 bg-luxury-black border-t border-gold/10">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl text-gold font-elegant mb-10 text-center">用户评价</h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        {reviews.map((review, i) => (
                            <ReviewCard key={i} {...review} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
