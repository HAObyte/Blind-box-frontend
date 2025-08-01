import React from "react";

export default function Footer() {

    const handleSubscribe = (e) => {
        e.preventDefault(); // 关键：阻止表单默认提交行为
        // 这里可以添加订阅逻辑（如获取输入框的值、发送请求等）
        /*const emailInput = e.target.querySelector('input[type="email"]');
        const email = emailInput.value;
        console.log("订阅邮箱：", email);*/
        // 可以添加验证、提示等逻辑
    };

    return (
        <footer className="bg-luxury-black border-t border-gold/20 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <div>
                        <div className="flex items-center mb-6">
                            <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center mr-3 shadow-gold">
                                <span className="font-elegant font-bold text-luxury-black text-lg">HBB</span>
                            </div>
                            <h2 className="font-elegant text-2xl text-gold">Hanson's Blind Box</h2>
                        </div>
                        <p className="text-white/60 mb-6">
                            探索奢华，收藏经典。我们致力于为您提供最顶级的盲盒体验，每一款盲盒都代表着匠心与品质。
                        </p>
                    </div>


                    {/* 联系信息 */}
                    <div>
                        <h3 className="font-elegant text-xl text-white mb-6">联系我们</h3>
                        <ul className="space-y-3 text-white/60 text-sm">
                            <li className="flex items-start">
                                <i className="fa fa-map-marker text-gold mt-1 mr-3"></i>
                                Nanjing University,No.22 HanKou Road, Nanjing City, Jiangsu Province, China.
                            </li>
                            <li className="flex items-start">
                                <i className="fa fa-phone text-gold mt-1 mr-3"></i>
                                155-0527-9688
                            </li>
                            <li className="flex items-start">
                                <i className="fa fa-envelope text-gold mt-1 mr-3"></i>
                                715754214@qq.com
                            </li>
                            <li className="flex items-start">
                                <i className="fa fa-clock-o text-gold mt-1 mr-3"></i>
                                目前暂时没有空闲时间~
                            </li>
                        </ul>
                    </div>

                    {/* 订阅 */}
                    <div>
                        <h3 className="font-elegant text-xl text-white mb-6">订阅最新资讯</h3>
                        <p className="text-white/60 mb-4">订阅我们的电子邮件，获取最新盲盒信息和专属优惠</p>
                        <form onSubmit={handleSubscribe}>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="您的邮箱地址"
                                    className="flex-1 bg-luxury-gray border border-gold/30 rounded-l-sm px-4 py-2 focus:outline-none focus:border-gold"
                                />
                                <button
                                    type="submit"
                                    className="bg-gold text-luxury-black px-4 py-2 rounded-r-sm hover:bg-gold-light transition-colors"
                                >
                                    订阅
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <p className="text-center text-white/40 text-sm">© 2025 Hanson's BlindBox 版权所有</p>
            </div>
        </footer>
    );
}
