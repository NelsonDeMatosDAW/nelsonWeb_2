
'use client'
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules'; // Import the Autoplay module
import { Swiper, SwiperSlide } from 'swiper/react';

export default function BannerSection1() {
    const [progress, setProgress] = useState(0);
    const slideDuration = 5000; // 5 seconds
    const swiperRef = useRef();

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    return 0; // Reset when 100%
                }
                return prevProgress + (100 / (slideDuration / 30));
            });
        }, 30);

        return () => clearInterval(interval);
    }, []);

    const handleSlideChange = (swiper) => {
        // Remove the "active" class from all slides
        const allSlides = document.querySelectorAll('.slide-item .auto-container');
        allSlides.forEach((slide) => {
            slide.classList.remove('active');
        });

        // Add the "active" class to the current slide
        const activeSlide = swiper.slides[swiper.activeIndex].querySelector('.auto-container');
        console.log(swiper);

        if (activeSlide) {
            activeSlide.classList.add('active');
        }

        setProgress(0); // Reset progress when the slide changes
    };

    return (
        <>
            <section className="banner-section">
                <div className="banner-container">
                    <div className="banner-slider owl-theme owl-carousel">
                        <Swiper
                            spaceBetween={50}
                            effect={'fade'}
                            slidesPerView={1}
                            rewind={true}
                            onSlideChange={handleSlideChange}
                            autoplay={{
                                delay: slideDuration,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, EffectFade, Navigation]} // Include Autoplay as a module
                            // navigation={true}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            {/*Slide Item*/}
                            <SwiperSlide className="slide-item">
                                <div className="image-layer" style={{ backgroundImage: 'url(images/main-slider/sesion_web_dev-1.jpg)' }}>
                                </div>
                                <div className="slide-bar" />
                                <div className="slide-count"><span>01</span></div>
                                <div className="auto-container">
                                    <div className="content-box">
                                        <div className="content">
                                            <div className="inner">
                                                <h1><span>Nelson de Matos</span></h1>
                                                <div className="text">Diseño y Desarrollo Web.</div>
                                                <div className="links-box clearfix">
                                                    <div className="link"><Link href="/about" className="theme-btn btn-style-one"><span>Conóceme<i className="icon fa fa-arrow-right" /></span></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/*Slide Item*/}
                            <SwiperSlide className="slide-item">
                                <div className="image-layer" style={{ backgroundImage: 'url(images/main-slider/sesion_web_dev-2.jpg)' }}>
                                    <div className="slide-bar" />
                                    <div className="slide-count"><span>02</span></div>
                                    <div className="auto-container">
                                        <div className="content-box">
                                            <div className="content">
                                                <div className="inner">
                                                    <h1><span>Programador</span></h1>
                                                    <div className="text">Full Stack.</div>
                                                    <div className="links-box clearfix">
                                                        <div className="link"><Link href="/about" className="theme-btn btn-style-one"><span>Contacta<i className="icon fa fa-arrow-right" /></span></Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                            {/*Slide Item*/}
                            <SwiperSlide className="slide-item">
                                <div className="image-layer" style={{ backgroundImage: 'url(images/main-slider/image-1.jpg)' }}>
                                </div>
                                <div className="slide-bar" />
                                <div className="slide-count"><span>03</span></div>
                                <div className="auto-container">
                                    <div className="content-box">
                                        <div className="content">
                                            <div className="inner">
                                                <h1><span>Mis habilidades</span></h1>
                                                <div className="text">Mongo, Express, React, NodeJS.</div>
                                                <div className="links-box clearfix">
                                                    <div className="link"><Link href="/about" className="theme-btn btn-style-one"><span>Mis Proyectos<i className="icon fa fa-arrow-right" /></span></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="progress-bar-container">
                            <div
                                className="progress-bar"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        <div className="owl-nav">
                            <button onClick={() => swiperRef.current?.slidePrev()} className="owl-prev"><span className="prev-btn far fa-angle-left"></span></button>
                            <button onClick={() => swiperRef.current?.slideNext()} className="owl-next"><span className="next-btn far fa-angle-right"></span></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
