import Link from "next/link";

export default function PortfolioSingleSection({project}) {
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
                                        <div className="ttl"><span>Tecno</span><i className="fa fa-ellipsis-v" /></div>
                                        <ul>
                                            {project.tecnologias.map((tecnologia, index) => (
                                                <li key={index}>{tecnologia}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="text">{project.description}</div> {/* Descripción del proyecto */}
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
                    <div className="images">
                        <div className="image"><img src="/images/resource/image-36.jpg" alt="#" /></div>
                        <div className="image"><img src="/images/resource/image-37.jpg" alt="#" /></div>
                        <div className="image"><img src="/images/resource/image-38.jpg" alt="#" /></div>
                    </div>
                    <div className="post-controls">
                        <ul className="clearfix">
                            <li><Link href="#">Previous Project</Link></li>
                            <li><Link href="#">Next Project</Link></li>
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}
