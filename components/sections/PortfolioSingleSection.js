import Link from "next/link";
import { useState } from "react";

import { motion } from "framer-motion";

export default function PortfolioSingleSection({project, projects}) {

    const [isVisible, setIsVisible] = useState(false); //El contenido se inicia oculto

    return (
        <>
            <section className="project-details">
                <div className="auto-container">
                    <div className="upper-content">
                        <div className="row clearfix">
                            {/*Text Col*/}
                            <div className="text-col col-lg-5 col-md-12 col-sm-12">
                                <div className="inner">
                                    <h3>{project.title}</h3> {/* Usamos el título del proyecto */}

                                    <div className="text">{project.category}</div> {/* Descripción del proyecto */}

                                    <div className="scope">
                                        <div className="ttl"><span>Tecnologías </span><i className="fa fa-ellipsis-v" />
                                            <ul>
                                                    {project.tecnologias.map((tecnologia, index) => (
                                                        <li key={index}>{tecnologia}</li>
                                                    ))}
                                            </ul>
                                        </div>

                                        
                                    </div>
                                    <div className="text">{project.description_corta}</div> {/* Descripción del proyecto */}
                                </div>
                            </div>
                            {/*Image Col*/}
                            <div className="image-col col-lg-7 col-md-12 col-sm-12">
                                <div className="inner">
                                    <img src={project.image} alt={project.title} /> {/* Usamos la imagen del proyecto */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="button-details center-button">
                    <motion.button 
                        className="btn-style-mas"
                        onClick={() => setIsVisible(!isVisible)}
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.9 }}
                        animate={{ opacity: isVisible ? 0.8 : 1 }}
                    >
                        {isVisible ? "Ocultar detalles" : "Ver detalles"}
                    </motion.button>
                    </div>

                    {/** Renderizar el contenido según el estado de visibilidad */}
                    {isVisible && (
                        <div className="images">
                            {project.description_larga.map((desc, index) => (
                                <div key={index} className="images">
                                    <div className="text">{desc}</div>
                                    <div className="image"><img src={project.imgs_description[index]} alt={`Descripción de ${project.title}`} /></div>
                                </div>
                               
                            ))}
                        </div>
                    )}

                    <div className="post-controls">
                        <ul className="clearfix">
                        <li>
                            {project.id > 1 && (
                                <Link href={`/portfolio-single/${project.id - 1}`}>Proyecto anterior</Link>
                            )}
                        </li>
                        <li>
                            {project.id < projects.length && (
                                <Link href={`/portfolio-single/${project.id + 1}`}>Siguiente proyecto</Link>
                            )}
                            
                        </li>
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}
