import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import img1 from "@/assets/img/1.jpg";
import img2 from "@/assets/img/2.jpg";
import img3 from "@/assets/img/3.jpg";
import img4 from "@/assets/img/4.jpg";
import img5 from "@/assets/img/5.jpg";
import img6 from "@/assets/img/6.jpg";
import img7 from "@/assets/img/7.jpg";

import thumb1 from "@/assets/img/11.jpg";
import thumb2 from "@/assets/img/22.jpg";
import thumb3 from "@/assets/img/33.jpg";
import thumb4 from "@/assets/img/8.jpg";
import thumb5 from "@/assets/img/55.jpg";
import thumb6 from "@/assets/img/66.jpg";
import thumb7 from "@/assets/img/77.jpg";

const images = [
    { id: 1, src: img1, thumb: thumb1 },
    { id: 2, src: img2, thumb: thumb2 },
    { id: 3, src: img3, thumb: thumb3 },
    { id: 4, src: img4, thumb: thumb4 },
    { id: 5, src: img5, thumb: thumb5 },
    { id: 6, src: img6, thumb: thumb6 },
    { id: 7, src: img7, thumb: thumb7 },
];

const ProductSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    // refs for navigation buttons
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    // Swiper requires navigation buttons refs set after render
    const [navReady, setNavReady] = useState(false);
    useEffect(() => {
        setNavReady(true);
    }, []);

    return (
        <section className="product-slider">
            <h1 className="product-slider__title">Наші товари</h1>

            <div className="product-slider__main-wrapper">
                {/* Навигация */}
                <div className="product-slider__nav">
                    <button ref={prevRef} className="nav-button nav-button--prev" aria-label="Previous Slide">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18l-6-6 6-6" stroke="#FF7F50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button ref={nextRef} className="nav-button nav-button--next" aria-label="Next Slide">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 6l6 6-6 6" stroke="#FF7F50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Основной слайдер */}
                <Swiper
                    style={{ width: "100%", height: "450px" }}
                    spaceBetween={15}
                    navigation={navReady ? { prevEl: prevRef.current, nextEl: nextRef.current } : false}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[Navigation, Thumbs]}
                    onInit={(swiper) => {
                        // @ts-ignore
                        swiper.params.navigation.prevEl = prevRef.current;
                        // @ts-ignore
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    loop={true}
                    centeredSlides={true}
                    slidesPerView={1}
                    grabCursor={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                >
                    {images.map(({ id, src }) => (
                        <SwiperSlide key={id}>
                            <div className="product-slider__slide">
                                <img src={src} alt={`Slide ${id}`} loading="lazy" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Превью слайдер */}
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                watchSlidesProgress
                modules={[Thumbs]}
                className="product-slider__thumbs"
                breakpoints={{
                    320: { slidesPerView: 3 },
                    640: { slidesPerView: 4 },
                    900: { slidesPerView: 5 },
                }}
                grabCursor={true}
            >
                {images.map(({ id, thumb }) => (
                    <SwiperSlide key={id} className="product-slider__thumb-slide">
                        <img src={thumb} alt={`Thumbnail ${id}`} loading="lazy" />
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
};

export default ProductSlider;
