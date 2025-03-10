
'use client'
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
export default function ServicesSection2() {
    const [activeTab, setActiveTab] = useState('tab-1');
    const [activeAccordion, setActiveAccordion] = useState(2);

    const tabs = [
        {
            id: 'tab-1', label: 'INTECCA UNED', content: <>
            <h5 className="custom-h5-color">Arquitecto de Software</h5>
            <p>En mi rol como arquitecto de Software en INTECCA UNED estoy desarrollando una API robusta utilizando Node.js, Express y MongoDB.
            Con esta API se consolidan datos de diversos orígenes en un único repositorio de contenidos digitales eficiente y escalable.
            Extraemos y procesamos datos de repositorios de origen basados en SolR, mapeándolos antes de almacenarlos en MongoDB para garantizar su coherencia y calidad. </p>
                <p>Además,he
            automatizado la integración de Open Refine en nuestro flujo de trabajo mediante su API, lo que permite realizar procesos de limpieza y refinamiento de datos de forma directa y
            eficiente desde nuestra API Azahar</p>
            </>,
            accordions : [
                {
                    id: 1,
                    title: "Fechas de trabajo",
                    details: "Desde 06/2024 - Actualidad",
                    icon: "fa-trophy"
                },
                {
                    id: 2,
                    title: "Lugar de trabajo",
                    details: "Av. Astorga, 15, 24401 Ponferrada, León",
                    icon: "fa-home"
                },
                {
                    id: 3,
                    title: "Tecnologías utilizadas",
                    details: "Node Js, Express y MongoDB",
                    icon: "fa-cogs"
                },
                {
                    id: 4,
                    title: "Contacto responsable de Proyecto",
                    details: "La responsable del proyecto es Vanesa Alonso Silvan. Puedes contactar con ella a través del correo electrónico valonso@intecca.uned.es",
                    icon: 'fa-user'
                },
            ]
        },
        {
            id: 'tab-2', label: 'Academia del Transportista', content: <> 
            <h5 className="custom-h5-color">Desarrolador Web</h5>
            <p>Durante mi formación en desarrollo de aplicaciones web tuve la oportunidad de realizar prácticas en la Academia del Transportista, donde brindé apoyo integral al equipo de desarrollo
                web y al equipo de soporte técnico.</p>
            <p>Mis responsabilidades incluyeron colaborar en el diseño, desarrollo y mantenimiento de aplicaciones web, así como proporcionar asistencia técnica para resolver problemas y mejorar la 
                experiencia del usuario de los productos digitales de la compañia</p>
            </>,
            accordions: [
                {
                    id: 1,
                    title: "Duración del proyecto",
                    details: "De 03/2024 a 06/2024",
                    icon: "fa-calendar"
                },
                {
                    id: 2,
                    title: "Modalidad de trabajo",
                    details: "Remoto",
                    icon: "fa-home"
                }
            ]
        },
        {
            id: 'tab-3', label: 'Proyecto finde de Grado', content: <>
                <h5 className="custom-h5-color">PWA MERN</h5>
                <p>Realicé una PWA como trabajo final de grado.</p>
                <p>El proyecto se centra en optimizar la interacción entre los asistentes a discotecas y los DJs mediante una aplicación que permite a los usuarios solicitar canciones en tiempo real.
                Desarrollada con el Stack MERN, la aplicación usa React en el frontend, MongoDB como base de datos no relacional, y Node.js con Express.js para el backend. La aplicación presenta tres 
                roles diferenciados: 
                </p>
                <p>Clientes, DJs y Administradores</p> 
                </>,
                accordions: [
                    {
                        id: 1,
                        title: "Mi filosofía",
                        details: "Desarrollar mis habilidades de programación creando una PWA que aporte soluciones tecnológicas a usuarios reales.",
                        icon: "fa-lightbulb"
                    },
                    {
                        id: 3,
                        title: "Tecnologías utilizadas",
                        details: "MongoDB, Express, React y Node.js",
                        icon: "fa-cogs"
                    },
                ]
        },
    ];
    
    return (
        <>
            <section className="services-two">
                <div className="auto-container">

                    {/*Texto Titulo*/}
                    <div className="def-title-box">
                        <div className="patt"><span /></div>
                        <div className="subtitle">Conoce mi</div>
                        <h3>Experiencia laboral</h3>
                    </div>

                    {/*Fila ancho*/}
                    <div className="row parent-row clearfix">

                        {/*Columna izquierda*/}
                        <div className="tabs-col col-xl-8 col-lg-12 col-md-12 col-sm-12">
                            <div className="tabs-box def-tabs-box">
                                <ul className="tab-buttons clearfix">
                                    {tabs.map((tab) => (
                                        <li
                                            key={tab.id}
                                            className={`tab-btn ${activeTab === tab.id ? 'active-btn' : ''}`}
                                            onClick={() => setActiveTab(tab.id)}
                                        >
                                            <span>{tab.label}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="tabs-content">
                                    {tabs.map(
                                        (tab) =>
                                            activeTab === tab.id && (
                                                <motion.div
                                                    key={tab.id}
                                                    className="tab active-tab"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -20 }}
                                                    transition={{ duration: 0.5 }}
                                                >
                                                    <div className="row clearfix">
                                                        
                                                        <div className="text-col col-lg-12 col-md-12 col-sm-12">
                                                            <div className="text">{tab.content}</div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )
                                    )}
                                </div>
                            </div>
                        </div>

                        {/*Columna derecha*/}
                        <div className="accordions-col col-xl-4 col-lg-12 col-md-12 col-sm-12">
                            <div className="accordion-box clearfix">
                                {tabs.find(tab => tab.id === activeTab)?.accordions.map((accordion) => (
                                    <div
                                        key={accordion.id}
                                        className={`accordion block ${activeAccordion === accordion.id ? 'active-block' : ''}`}
                                        onClick={() => setActiveAccordion(accordion.id === activeAccordion ? null : accordion.id)}
                                    >
                                        <div className={`acc-btn ${activeAccordion === accordion.id ? 'active' : ''}`}>
                                            {accordion.title} <i className={`fa-regular ${accordion.icon}`} />
                                        </div>
                                        <AnimatePresence>
                                            {activeAccordion === accordion.id && (
                                                <motion.div
                                                    className="acc-content"
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.5 }}
                                                >
                                                    <div className="content">
                                                        <div className="text">{accordion.details}</div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
