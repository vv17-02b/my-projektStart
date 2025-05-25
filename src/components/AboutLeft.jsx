import React, { useEffect, useState } from "react";
import TestimonialForm from "./TestimonialForm";
import TestimonialList from "./TestimonialList";

function AboutLeft() {
    const [testimonials, setTestimonials] = useState(() => {
        const saved = localStorage.getItem("testimonials");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("testimonials", JSON.stringify(testimonials));
    }, [testimonials]);

    const addTestimonial = (testimonial) => {
        setTestimonials((prev) => [testimonial, ...prev]);
    };

    const deleteTestimonial = (id) => {
        setTestimonials((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <div className="about-left">
            <h2>Про наш інтернет-магазин</h2>
            <p>Наша місія — комфорт і вигода кожного покупця!</p>
            <ul>
                <li>🚚 Швидка доставка</li>
                <li>💳 Зручні оплати</li>
                <li>☎️ Техпідтримка</li>
            </ul>

            <TestimonialForm onAdd={addTestimonial} />
            <TestimonialList testimonials={testimonials} onDelete={deleteTestimonial} />
        </div>
    );
}

export default AboutLeft;
