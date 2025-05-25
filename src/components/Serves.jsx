import React, { useState } from "react";
import mapImage from "../assets/map.png";


const Serves = () => {
    const [popupVisible, setPopupVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        comment: "",
    });
    const [formError, setFormError] = useState("");

    const togglePopup = () => {
        setPopupVisible(!popupVisible);
        setFormError("");
        setFormData({ name: "", phone: "", comment: "" });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Простая валидация
        if (!formData.name.trim() || !formData.phone.trim()) {
            setFormError("Будь ласка, заповніть ім'я та телефон.");
            return;
        }
        alert(
            `Дякуємо за замовлення, ${formData.name}! Ми зв’яжемося з вами за телефоном ${formData.phone}.`
        );
        togglePopup();
    };

    return (
        <section id="services" className="services">
            <div className="services__info">
                <h2>Наша техпідтримка і послуги</h2>
                <p>
                    Ми працюємо цілодобово — без вихідних та свят. Гарантуємо якісне
                    обслуговування, швидку доставку, надійні товари та постійну підтримку
                    наших клієнтів. Ваша зручність — наш пріоритет.
                </p>
                <ul>
                    <li>🕒 Графік роботи: 24/7, без вихідних</li>
                    <li>🔧 Наші послуги: консультації, гарантійне обслуговування</li>
                    <li>🛍 Наші товари: електроніка, побутова техніка</li>
                    <li>📊 Характеристики: сучасні, сертифіковані, перевірені</li>
                    <li>🚚 Гарантія, доставка, строки: до 3 днів по Україні</li>
                    <li>💸 Ціни і знижки: регулярні акції до -50%</li>
                    <li>😊 Задоволені клієнти: понад 10,000 відгуків</li>
                </ul>
                <button className="btn-order" onClick={togglePopup}>
                    Замовити зворотній дзвінок
                </button>
            </div>

            <div className="services__map">
                <h3>Наша геолокація</h3>
                <p>Наша мережа магазинів по всій Україні</p>
                <img src={mapImage} alt="Карта" />
            </div>

            {popupVisible && (
                <div className="popup-overlay" onClick={togglePopup}>
                    <div className="popup" onClick={(e) => e.stopPropagation()}>
                        <h4>Оформити замовлення</h4>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Ім'я"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Телефон"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                name="comment"
                                placeholder="Коментар (необов’язково)"
                                value={formData.comment}
                                onChange={handleChange}
                                rows={3}
                            ></textarea>
                            {formError && <p className="form-error">{formError}</p>}
                            <button type="submit">Відправити</button>
                            <button type="button" className="close" onClick={togglePopup}>
                                Закрити
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Serves;
