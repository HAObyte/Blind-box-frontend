import {reviews} from '../Data/Reviews.jsx';
import NavBar from "../components/NavBar.jsx";
import React from "react";
import ReviewCard from "../components/ReviewCard.jsx";

export default function Reviews() {
    return (
        <>
            <NavBar/>
            <section className="py-16 bg-luxury-black relative">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="font-elegant text-3xl md:text-4xl text-white mb-2">用户评价</h2>
                            <p className="text-white/50">在这里，看到我们所有的真实评价</p>
                        </div>
                    </div>

                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
                        {reviews.map((item, i) => (
                            <ReviewCard key={i} {...item} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}