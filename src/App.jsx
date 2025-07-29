import React from "react";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import LuxuryCard from "./components/LuxuryCard.jsx";
import HotBoxCard from "./components/HotBoxCard.jsx";
import ReviewCard from "./components/ReviewCard.jsx";
import BlindBoxHomepageAd from "./components/HomePageAD.jsx";

export default function Home() {
    // 分类数据
    const categories = [
        {
            title: "星尘斗士",
            description: "乔家第一战神埃及之旅，过关斩将对抗恶人救世主",
            image: "../public/星尘斗士/surface.jpg",
        },
        {
            title: "黄金之风",
            description: "意大利黑帮的荣耀传说，黄金精神彰显JoJo世界底色",
            image: "../public/黄金之风/surface.jpg",
        },
        {
            title: "不灭钻石",
            description: "镇上的奇妙冒险，和平街的隐藏宝藏与幕后的恐怖杀人魔",
            image: "../public/不灭钻石/surface.jpg",
        },
        {
            title: "石之海",
            description: "徐伦与父亲的命运之战，旧世界重启，开启盲盒新篇章",
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
                "./public/不灭钻石/ren.jpg"
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
            <NavBar/>
            <BlindBoxHomepageAd/>

            <section className="py-16 bg-luxury-black relative">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="font-elegant text-3xl md:text-4xl text-white mb-2">经典Stand盲盒系列</h2>
                            <p className="text-white/50">探索我们精心挑选的经典收藏系列</p>
                        </div>
                        <a href="https://www.nju.edu.cn/"
                           className="hidden md:flex items-center text-gold hover:text-gold-light transition-colors">
                            查看全部系列 <i className="fa fa-angle-right ml-2"></i>
                        </a>
                    </div>
                    <div className="container mx-auto px-4">
                        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                            {categories.map((item, i) => (
                                <LuxuryCard key={i} {...item} />
                            ))}
                        </div>
                    </div>


                </div>
            </section>

            <section className="py-16 bg-luxury-black relative">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="font-elegant text-3xl md:text-4xl text-white mb-2">热门潮流-主题盲盒</h2>
                            <p className="text-white/50">当下最热门的主题盲盒系列</p>
                        </div>
                        <a href="https://www.nju.edu.cn/"
                           className="hidden md:flex items-center text-gold hover:text-gold-light transition-colors">
                            查看全部系列 <i className="fa fa-angle-right ml-2"></i>
                        </a>
                    </div>
                    <div className="container mx-auto px-4">
                        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                            {hotBoxes.map((item, i) => (
                                <HotBoxCard key={i} {...item} />
                            ))}
                        </div>
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

                <Footer/>
            </>
            );
            }
