import React, { useState, useEffect } from "react";
// import CartButton from "./CartButton"; // Імпортуй CartButton для кнопки з тултіпом

// Імпортуємо всі картинки
import appliancesJpg from "../assets/slider/appliances.jpg";
import appliancesPng from "../assets/slider/appliances.png";
import gadgetJpg from "../assets/slider/gadget.jpg";
import gadgetPng from "../assets/slider/gadget.png";
import kitchenPng from "../assets/slider/gajet.jpg";
import loptopJpg from "../assets/slider/loptop.jpg";
import varPng from "../assets/slider/var.png";
import viarJpg from "../assets/slider/viar.jpg";

const images = [
    appliancesJpg,
    appliancesPng,
    gadgetJpg,
    gadgetPng,
    kitchenPng,
    loptopJpg,
    varPng,
    viarJpg,
];

function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [tooltipVisible, setTooltipVisible] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    // Показываем/скрываем тултип по клику
    const toggleTooltip = () => {
        setTooltipVisible((prev) => !prev);
    };
    
    return (
        <section id="home">
            <div className="container-fluid">
                <div className="heroPage">
                    <div className="heroPage__left">
                        <h1>Ласкаво просимо в інтернет-магазин</h1>
                        <p>
                            У нашому інтернет-магазині ви знайдете широкий вибір якісних товарів за доступними цінами.
                            Ми забезпечуємо швидку доставку, зручні способи оплати та постійну підтримку клієнтів.
                            Купуйте легко, безпечно та вигідно — не виходячи з дому.
                            Зробіть ваші покупки приємними та ефективними!
                        </p>

                        <a
                            className="btn-reset btn__by-tultip"
                            onClick={toggleTooltip}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") toggleTooltip();
                            }}
                        >
                            Вибери свій товар
                        </a>

                        {tooltipVisible && (
                            <div className="btn-tooltip">
                                Інтернет-покупки - це зручно, швидко і безпечно. Обирайте товари
                                онлайн та отримуйте доставку додому.
                            </div>
                        )}

                        {/* <CartButton /> */}
                    </div>

                    <div className="heroPage__right">
                        <img
                            src={images[currentIndex]}
                            alt="Slider"
                            className="heroPage__image"
                        />
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Hero;
