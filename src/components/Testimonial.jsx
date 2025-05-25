import React from "react";

function Testimonial() {
    return (
        <div className="testimonial">
            <h4>Відгуки клієнтів</h4>
            <div className="testimonial-item">
                <p>“Чудовий сервіс! Все приїхало швидко і якісно.”</p>
                <div className="stars">⭐⭐⭐⭐☆</div>
                <p className="rating">Оцінка: 4.5/5</p>
            </div>
        </div>
    );
}

export default Testimonial;
