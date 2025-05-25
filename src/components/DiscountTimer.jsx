import React, { useState, useEffect } from 'react';

function DiscountTimer() {
    const calculateTimeLeft = () => {
        const deadline = new Date('2025-05-26T00:00:00');
        const now = new Date();
        const difference = deadline - now;

        if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="discount-timer">
            <p>Залишилось до кінця акції:</p>
            <div className="timer">
                <span>{timeLeft.days} днів</span>
                <span>{timeLeft.hours} годин</span>
                <span>{timeLeft.minutes} хвилин</span>
                <span>{timeLeft.seconds} секунд</span>
            </div>
        </div>
    );
}

export default DiscountTimer;
