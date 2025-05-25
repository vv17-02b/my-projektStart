import React, { useState } from 'react';

function AboutRight() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        product: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Простенька клієнтська валідація
        if (!formData.username || !formData.password || !formData.product) {
            alert("Будь ласка, заповніть всі поля.");
            return;
        }

        // Відправка даних на сервер
        fetch("http://localhost:3001/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => {
                if (!res.ok) throw new Error("Помилка при реєстрації");
                return res.json();
            })
            .then((data) => {
                alert("Успішно зареєстровано!");
                setFormData({ username: '', password: '', product: '' });
            })
            .catch((err) => alert(err.message));
    };

    return (
        <div className="about-right">
            <h3>Реєстрація</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Логін:
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Введіть логін"
                    />
                </label>
                <label>
                    Пароль:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Введіть пароль"
                    />
                </label>
                <label>
                    Оберіть товар:
                    <select
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                    >
                        <option value="">-- Оберіть товар --</option>
                        <option value="laptop">Ноутбук</option>
                        <option value="smartphone">Смартфон</option>
                        <option value="kitchen">Кухонна техніка</option>
                    </select>
                </label>
                <button type="submit">Зареєструватися</button>
            </form>
        </div>
    );
}

export default AboutRight;
