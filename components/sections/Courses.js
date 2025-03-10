'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Courses = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Solo habilitar Swiper en el cliente
    }, []);

    useEffect(() => {
        AOS.init();
    }, []);

    if (!isClient) {
        return null; // Evitar renderizado en el servidor
    }

    return (

        <section className="courses-section pt-2" >
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="def-title-box">
                        <div className="patt"><span /></div>
                        <div className="subtitle">Formación</div>
                        <h3>Cursos</h3>
                    </div>

                    <div className="w-full text-col col-lg-12 col-md-12 col-sm-12">
                        <h3 className="text-center relative">Formacion continua</h3>
                        <div className="line-animation mb-2"></div>
                    </div>
                    

                    <Swiper
                        className="w-full"
                        spaceBetween={30}
                        slidesPerView="auto"  // Asegura que los slides ocupen el 100% del ancho disponible
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                },
                            500: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            991: {
                                slidesPerView: 4,
                            }
                        }}
                        loop={true}
                        style={{ width: '100%' }}
                        data-aos="fade-up" data-aos-duration="2000" 
                    >
                        <SwiperSlide className="flex justify-center items-center">
                            <div className="text-center">
                                <h5 className="text">Programador JavaScript</h5>
                                <p>Edutin Academy</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="flex justify-center items-center">
                            <div className="text-center">
                                <h5 className="text">Gestión de Proyectos con Metodologías Ágiles y Enfoque Lean</h5>
                                <p>Fundación Telefónica</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="flex justify-center items-center">
                            <div className="text-center">
                                <h5 className="text">Gestión de Proyectos de Software con Git y GitHub</h5>
                                <p>Eduntin Academy</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="flex justify-center items-center">
                            <div className="text-center">
                                <h5 className="text">Ia Technologies for Cybersecurity and IoT</h5>
                                <p>INCIBE Instituto Nacional de Ciberseguridad</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Courses;