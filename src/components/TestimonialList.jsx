import React from "react";

function TestimonialList({ testimonials, onDelete }) {
    return (
        <div className="testimonial-list">
            {testimonials.map((t) => (
                <div key={t.id} className="testimonial-item">
                    <p>{t.text}</p>
                    <div>⭐️ {t.rating}</div>
                    {/* <button onClick={() => onDelete(t.id)}>🗑️ Видалити</button> */}
                </div>
            ))}
        </div>
    );
}

export default TestimonialList;
