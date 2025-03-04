

'use client'
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules'; // Import the Autoplay module
import { Swiper, SwiperSlide } from 'swiper/react';

export default function BannerSection1() {
    const slideDuration = 5000; // 5 seconds
    const swiperRef = useRef();

    return (
        <>
            <section className="banner-two" id="to-top-div">
                <div className="auto-container">
                    <div className="banner-slider owl-theme owl-carousel">
                        <Swiper
                            spaceBetween={50}
                            effect={'fade'}
                            slidesPerView={1}
                            rewind={true}
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
                                <div className="image-layer" style={{ backgroundImage: 'url(images/main-slider/image-2.jpg)' }} />
                                <div className="slide-count"><span>01</span></div>
                                <div className="content-box">
                                    <div className="content">
                                        <div className="inner">
                                            <div className="cat"><span>Programador</span></div>
                                            <h2><span>Hola, soy Nelson de Matos</span></h2>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/*Slide Item*/}
                            <SwiperSlide className="slide-item">
                                <div className="image-layer" style={{ backgroundImage: 'url(images/main-slider/image-3.jpg)' }} />
                                <div className="slide-count"><span>02</span></div>
                                <div className="content-box">
                                    <div className="content">
                                        <div className="inner">
                                            <div className="cat"><span>Desarrollo y Diseño Web</span></div>
                                            <h2><span>Full Stack Developer</span></h2>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            
                        </Swiper>
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
