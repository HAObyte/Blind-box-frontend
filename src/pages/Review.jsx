import ReviewCard from "../components/ReviewCard.jsx";
import {reviews} from "../Data/Reviews.jsx";
import React from "react";
import Footer from "../components/Footer.jsx";
import NavBar from "../components/NavBar.jsx";

export default function Review() {
    return(
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
    )
}