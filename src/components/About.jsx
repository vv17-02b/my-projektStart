import React, { useState, useEffect } from "react";

const initialTestimonials = [
    { id: 1, text: "Швидка доставка, рекомендую!", rating: 5 },
    { id: 2, text: "Зручний інтерфейс і підтримка!", rating: 4 },
];

function About() {
    const [formData, setFormData] = useState({ username: "", password: "", product: "" });
    const [testimonials, setTestimonials] = useState(initialTestimonials);
    const [discountTime, setDiscountTime] = useState(3 * 24 * 60 * 60); // 3 дні у секундах

    useEffect(() => {
        const interval = setInterval(() => {
            setDiscountTime((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (s) => {
        const d = Math.floor(s / 86400);
        const h = Math.floor((s % 86400) / 3600);
        const m = Math.floor((s % 3600) / 60);
        const sec = s % 60;
        return `${d}д ${h}г ${m}хв ${sec}с`;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.username || !formData.password || !formData.product) {
            alert("Заповніть усі поля");
            return;
        }

        // Проста імітація збереження
        alert("Успішно зареєстровано!");
        setFormData({ username: "", password: "", product: "" });
    };

    const onDelete = (id) => {
        setTestimonials(testimonials.filter((t) => t.id !== id));
    };

    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-left">
                    <h2>Про наш інтернет-магазин</h2>
                    <p>
                        Заснований у 2020 році, наш інтернет-магазин став місцем, де кожен знаходить те, що шукає. Від гаджетів
                        до побутової техніки — ми поєднуємо якість, доступність та турботу про клієнтів. Ми постійно вдосконалюємося,
                        щоб зробити ваш шопінг ще комфортнішим.
                    </p>
                    <ul>
                        <li>Доставка по всій Україні</li>
                        <li>Підтримка 24/7</li>
                        <li>Гарантія якості</li>
                    </ul>

                    <div className="testimonial-list">
                        {testimonials.map((t) => (
                            <div key={t.id} className="testimonial-item">
                                <p>{t.text}</p>
                                <div>⭐ {t.rating}</div>
                                <button onClick={() => onDelete(t.id)}>🗑 Видалити</button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="about-right">
                    <h3>Реєстрація</h3>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Логін:
                            <input
                                type="text"
                                name="username"
                                placeholder="Введіть логін"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Пароль:
                            <input
                                type="password"
                                name="password"
                                placeholder="Введіть пароль"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Оберіть товар:
                            <select name="product" value={formData.product} onChange={handleChange}>
                                <option value="">-- Виберіть --</option>
                                <option value="laptop">Ноутбук</option>
                                <option value="smartphone">Смартфон</option>
                                <option value="vr">VR-гарнітура</option>
                            </select>
                        </label>
                        <button type="submit">Зареєструватися</button>
                    </form>
                </div>
            </div>

            <div className="discount-timer">
                Знижка діє ще: {formatTime(discountTime)}
            </div>
        </section>
    );
}

export default About;
