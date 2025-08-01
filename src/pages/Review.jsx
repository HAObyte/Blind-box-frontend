// src/pages/Review.jsx
import { useState, useEffect } from 'react';
import ReviewCard from "../components/ReviewCard.jsx";
import ReviewForm from "../components/ReviewForm.jsx";
import { reviews as defaultReviews } from "../data/reviews.jsx";
import Footer from "../components/Footer.jsx";
import NavBar from "../components/NavBar.jsx";

export default function Review() {
    // 从本地存储加载评论，若无则使用默认评论
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const storedReviews = localStorage.getItem('reviews');
        if (storedReviews) {
            setReviews(JSON.parse(storedReviews));
        } else {
            setReviews(defaultReviews);
            localStorage.setItem('reviews', JSON.stringify(defaultReviews));
        }
    }, []);

    return (
        <>
            <NavBar/>
            <section className="py-16 bg-luxury-black relative">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="font-elegant text-3xl md:text-4xl text-white mb-2">客户评价-眼见为实</h2>
                            <p className="text-white/50">我们致力于产品的真实性，让我们的客户替我们说话</p>
                        </div>
                    </div>

                    {/* 评论发布表单 */}


                    {/* 评论列表 */}
                    <div className="grid gap-8">
                        {reviews.map((review) => (
                            <ReviewCard key={review.id || review.name} {...review} />
                        ))}
                    </div>
                    <ReviewForm />
                </div>
            </section>
            <Footer/>
        </>
    );
}