import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CartButton from "./components/CartButton";
import "./scss/main.scss";
import About from "./components/About";
import ProductSlider from "./components/ProductSlider";
import Serves from "./components/Serves";
import Footer from "./components/Footer";
function App() {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            isDark ? "dark" : "light"
        );
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    const toggleTheme = () => setIsDark((prev) => !prev);
    const [newReview, setNewReview] = useState({ text: "", rating: 5 });

    const handleReviewChange = (e) => {
        const { name, value } = e.target;
        setNewReview((prev) => ({ ...prev, [name]: value }));
    };

    const addTestimonial = () => {
        if (!newReview.text || newReview.rating < 1 || newReview.rating > 5) {
            alert("Будь ласка, введіть відгук і рейтинг (1–5)");
            return;
        }

        const newItem = {
            id: Date.now(),
            text: newReview.text,
            rating: parseInt(newReview.rating),
        };

        setTestimonials([...testimonials, newItem]);
        setNewReview({ text: "", rating: 5 });
    };

    return (
        <div className="site-container">
            <Header toggleTheme={toggleTheme} isDark={isDark} />

            <main>
                <Hero />
                <About />
                <ProductSlider />
                <Serves />
                {/* <CartButton/> */}
               
            </main>
            <Footer />
        </div>
    );
}

export default App;
