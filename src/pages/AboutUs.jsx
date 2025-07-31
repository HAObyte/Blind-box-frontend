import React from "react";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

export default function AboutUs() {
    // 开发过程中的故事数据
    const developmentStories = [
        {
            type: "challenge",
            title: "图片路径折磨记",
            content: "刚开始把图片全放在public文件夹，结果引用的时候总是404。改了十几次路径，甚至试过把图片直接丢到组件文件夹里，最后才发现是自己在导入时多写了一个斜杠...那段时间看到控制台的404就头疼。",
            emoji: "🤯"
        },
        {
            type: "fun",
            title: "配色方案大翻车",
            content: "一开始想搞个赛博朋克风，用了荧光绿配紫色，同学说像游戏厅灯箱。后来改成黑金色，本来以为会很高级，结果因为金色调太亮，被说像土豪金手机壳...最后调了N次透明度才顺眼。",
            emoji: "😂"
        },
        {
            type: "challenge",
            title: "路由跳转的坑",
            content: "登录成功后死活跳不到首页，查了半天才发现是PrivateRoute组件里的条件写反了。更绝的是，我还对着教程抄了三遍，每次都抄错同一个地方，最后是睡了一觉起来才突然发现的。",
            emoji: "😅"
        },
        {
            type: "fun",
            title: "同学的神吐槽",
            content: "展示半成品时，同学说我的盲盒卡片像扑克牌，分类按钮像微波炉按键。还有人说加载动画像转圈的蚊香...虽然被吐槽，但这些建议反而帮我改了很多细节，现在他们都说「真香」。",
            emoji: "👍"
        }
    ];

    return (
        <>
            <NavBar />

            {/* 页面标题 */}
            <section className="py-16 bg-luxury-black">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-elegant text-4xl text-gold mb-4">开发背后的故事</h1>
                    <p className="text-white/60 max-w-2xl mx-auto">作为大一Web作业，这个项目充满了踩坑与欢乐</p>
                </div>
            </section>

            {/* 项目简介 */}
            <section className="py-12 bg-luxury-gray/10">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="bg-luxury-black/50 p-6 rounded-xl border border-gold/10">
                        <h2 className="text-xl text-white mb-3">关于这个作业</h2>
                        <p className="text-white/70 mb-4">
                            这是我的第一个完整Web项目，用React做的盲盒网站。从完全不懂路由、组件，到现在能实现登录、展示商品，花了挺长时间。
                        </p>
                        <p className="text-white/70">
                            虽然还有很多bug（比如偶尔点不动的按钮），但每次解决一个问题都超有成就感！特别感谢老师和同学的帮忙，不然我可能还卡在图片404那里...
                        </p>
                    </div>
                </div>
            </section>

            {/* 开发故事 */}
            <section className="py-16 bg-luxury-black">
                <div className="container mx-auto px-4">
                    <h2 className="font-elegant text-2xl text-gold mb-8 text-center">踩坑与趣事集锦</h2>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {developmentStories.map((story, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-xl border ${
                                    story.type === "challenge"
                                        ? "border-red-500/30 bg-red-900/10"
                                        : "border-green-500/30 bg-green-900/10"
                                }`}
                            >
                                <div className="flex items-start">
                                    <span className="text-3xl mr-3 mt-1">{story.emoji}</span>
                                    <div>
                                        <h3 className="text-white text-lg font-medium mb-2">{story.title}</h3>
                                        <p className="text-white/70 text-sm">{story.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 学到的东西 */}
            <section className="py-16 bg-luxury-gray/10">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="font-elegant text-2xl text-gold mb-8 text-center">从中学到的</h2>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-luxury-black/50 p-6 rounded-xl border border-gold/10">
                            <h3 className="text-white text-lg mb-3">技术上</h3>
                            <ul className="text-white/70 space-y-2 text-sm">
                                <li>• 终于搞懂了React组件怎么传值</li>
                                <li>• 学会用devtools调试CSS样式</li>
                                <li>• 知道了路由守卫是什么（虽然还是有点懵）</li>
                                <li>• 图片路径一定要写对！写对！写对！</li>
                            </ul>
                        </div>

                        <div className="bg-luxury-black/50 p-6 rounded-xl border border-gold/10">
                            <h3 className="text-white text-lg mb-3">心得上</h3>
                            <ul className="text-white/70 space-y-2 text-sm">
                                <li>• 卡壳时睡一觉真的有用</li>
                                <li>• 不要怕问，同学老师都很乐意帮忙</li>
                                <li>• 先实现功能再美化，不然会累死</li>
                                <li>• 原来自己也能做出一个能跑的网站！</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}