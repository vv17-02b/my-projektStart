import React, { useState } from "react";

function TestimonialForm({ onAdd }) {
    const [text, setText] = useState("");
    const [rating, setRating] = useState(5);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        onAdd({ id: Date.now(), text, rating: parseInt(rating, 10) });
        setText("");
        setRating(5);
    };

    return (
        <form onSubmit={handleSubmit} className="testimonial-form">
            <textarea
                placeholder="Ваш відгук"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
            />
            <select value={rating} onChange={(e) => setRating(e.target.value)}>
                {[5, 4, 3, 2, 1].map((r) => (
                    <option key={r} value={r}>
                        {r} зірок
                    </option>
                ))}
            </select>
            <button type="submit">Додати відгук</button>
        </form>
        
    );
}

export default TestimonialForm;
