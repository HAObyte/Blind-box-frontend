import React from "react";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import LuxuryCard from "../components/LuxuryCard.jsx";
import HotBoxCard from "../components/HotBoxCard.jsx";
import ReviewCard from "../components/ReviewCard.jsx";
import BlindBoxHomepageAd from "../components/HomePageAD.jsx";
import {Link} from "react-router-dom";

export default function Home()
{
    const categories = [
        {
            title: "星尘斗士",
            description: "乔家第一战神埃及之旅，过关斩将对抗恶人救世主",
            image: "星尘斗士/surface.jpg",
        },
        {
            title: "黄金之风",
            description: "意大利黑帮的荣耀传说，黄金精神彰显JoJo世界底色",
            image: "黄金之风/surface.jpg",
        },
        {
            title: "不灭钻石",
            description: "镇上的奇妙冒险，和平街的隐藏宝藏与幕后的恐怖杀人魔",
            image: "不灭钻石/surface.jpg",
        },
        {
            title: "石之海",
            description: "徐伦与父亲的命运之战，旧世界重启，开启盲盒新篇章",
            image: "石之海/surface.jpg",
        },
    ];

    const hotBoxes = [
        {
            title: "绅士乔瑟夫",
            image: "战斗潮流/乔瑟夫.jpg",
            price: 29.9,
            tags: ["SSR", "限时", "动画经典"],
        },
        {
            title: "黄金体验礼盒",
            image: "黄金之风/乔鲁诺.jpg",
            price: 39.9,
            tags: ["UR", "新品"],
        },
        {
            title: "承太郎专辑",
            image: "星尘斗士/承太郎.jpg",
            price: 59.9,
            tags: ["SSR", "人气榜"],
        },
        {
            title: "星尘斗士-配角的光芒",
            image: "星尘斗士/阿布德尔.png",
            price: 29.9,
            tags: ["SR", "收藏"],
        },
        {
            title: "反派的人格魅力-反派特辑",
            image: "黄金之风/迪亚波罗.jpg",
            price: 59.9,
            tags: ["S", "人气榜"],
        },
        {
            title: "黄金色波纹",
            image: "战斗潮流/卡兹.jpg",
            price: 59.9,
            tags: ["SR", "人气榜"],
        },
        {
            title: "STAND!",
            image: "星尘斗士/白金之星.jpg",
            price: 99.9,
            tags: ["SR", "动漫灵魂"],
        },{
            title: "格斗动漫也有女面孔",
            image: "黄金之风/特利休.jpg",
            price: 39.9,
            tags: ["SR", "人气榜"],
        },
    ];

    // 用户评价
    const reviews = [
        {
            avatar: "https://picsum.photos/id/101/100/100",
            name: "Hanson",
            comment: "这个网站做的非常好，给了我非常愉快的抽盲盒体验，所有的盲盒概率都是一样的，不想有些其他网站故意将稀有款的概率调的非常低，后台所有的数据和逻辑都是公开的，我真的是爱死这个开发者了！！！（PS：附上几张我特别喜欢的角色~）",
            photos: [
                "不灭钻石/东方仗助.jpg",
                "不灭钻石/承太郎.jpg",
                "战斗潮流/卡兹.jpg",
                "战斗潮流/西撒.jpg",
                "黄金之风/特利休.jpg",
                "星尘斗士/乔瑟夫.png"
            ],
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
                        <Link to="/box-list" className="hidden md:flex items-center text-gold hover:text-gold-light transition-colors">
                            查看全部系列 <i className="fa fa-angle-right ml-2"></i>
                        </Link>
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
                        <Link to="/box-list" className="hidden md:flex items-center text-gold hover:text-gold-light transition-colors">
                            查看全部系列 <i className="fa fa-angle-right ml-2"></i>
                        </Link>
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

            <section className="py-16 bg-luxury-black relative">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="font-elegant text-3xl md:text-4xl text-white mb-2">客户评价-眼见为实</h2>
                            <p className="text-white/50">我们致力于产品的真实性，让我们的客户替我们说话</p>
                        </div>
                        <Link to="/review" className="hidden md:flex items-center text-gold hover:text-gold-light transition-colors">
                            查看全部评论 <i className="fa fa-angle-right ml-2"></i>
                        </Link>
                    </div>
                    <div className="container mx-auto px-4">
                        <div className="grid gap-8">
                            {reviews.map((review, i) => (
                                <ReviewCard key={i} {...review} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}
