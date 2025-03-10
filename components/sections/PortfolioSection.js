//components/sections/ProtfolioSection.js

'use client'
import Link from "next/link";
import { useEffect, useState } from "react";


export default function PortfolioSection() {

    //Creamos un state para los datos importados
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Cargar el archivo JSON desde public/data/
        fetch('/data/projects.json')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error("Error loading projects:", error));
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('mixitup').then((module) => {
                const mixitup = module.default || module; // Check for default export or module itself
                mixitup('.filter-list'); // Initialize MixItUp on your portfolio container
            }).catch((error) => console.error("MixItUp failed to load:", error));
        }
    }, []);

    return (
        <>
            <section className="portfolio-section">
                <div className="auto-container">
                    <div className="mixitup-gallery">
                        {/*Filter*/}
                        <div className="gallery-filters centered clearfix">
                            <ul className="filter-tabs filter-btns clearfix">
                                <li className="filter" data-role="button" data-filter="all">Mostrar todos</li>
                                <li className="filter" data-role="button" data-filter=".front-end">Front End</li>
                                <li className="filter" data-role="button" data-filter=".back-end">back End</li>
                                <li className="filter" data-role="button" data-filter=".full-stack">Full stack</li>
                                <li className="filter" data-role="button" data-filter=".otros">Otros</li>
                            </ul>
                        </div>
                        <div className="filter-list row clearfix">

                            {projects.map((project) => (
                                <div
                                    key={project.id}
                                    className={`portfolio-block mix all ${project.category.toLowerCase().replace(" ", "-")} col-xl-4 col-lg-4 col-md-6 col-sm-12`}
                                >
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src={project.image} alt={project.title} />
                                        </div>
                                        <div className="overlay">
                                            <div className="more-link">
                                                <a href={project.link} className="theme-btn">
                                                    <i className="fa-solid fa-bars-staggered" />
                                                </a>
                                            </div>
                                            <div className="inner">
                                                <div className="cat">
                                                    <span>{project.category}</span>
                                                </div>
                                                <h5>
                                                    <Link href={`/portfolio-single/${project.id}`}>{project.title}</Link>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        
                    </div>
                </div>
        </section >

        </>
    )
}
