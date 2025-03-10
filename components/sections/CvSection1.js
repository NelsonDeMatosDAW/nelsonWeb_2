import Link from "next/link";


export default function CvSection1() {
    return (
        <>
            <section className="cv-section">
				<div className="auto-container">
					<div className="row clearfix">
						
						{/*Content*/}
						<div className="text-col col-lg-6 col-md-12 col-sm-12">
							<div className="inner">
								<h4>Descárgate mi CV para conocer todos los detalles de mi formación y experiencia.</h4>
								<div className="text">
									<p>En mi CV tienes información detallada de mi formación, cursos, experiencia laboral y proyectos propios.</p>
                                    <p>Desde temprana edad, he tenido una gran pasión por la tecnología. Hace cuatro años, esta pasión me llevó a iniciar mis estudios en Desarrollo de 
                                        Aplicaciones Web, donde adquirí habilidades fundamentales en el sector. Sin embargo, mi curiosidad y ganas de superación no se detuvieron ahí; 
                                        paralelamente a mi formación académica, continué mi aprendizaje de manera autodidacta.</p>
									<p>He completado una serie de cursos en las plataformas tecnológicas más relevantes, dominando herramientas como Git, 
                                        y lenguajes de programación como JavaScript y PHP. Además, me he especializado en metodologías ágiles como Scrum y he culminado un 
                                        máster en el Stack MERN, tecnología que definitivamente encendió mi pasión por el desarrollo Full Stack.</p>
								
								</div>
							</div>
						</div>

                        {/*Image*/}
						<div className="image-col col-lg-6 col-md-12 col-sm-12">
							<div className="inner">
								<div className="image">
									<div className="bg-pattern" />
									<img src="/images/main-slider/sesion_web_dev-1.jpg" alt="" />
								</div>
							</div>
						</div>

					</div>

					<div className="row clearfix">
						<div className="text-col col-lg-12 col-md-12 col-sm-12 center-button">
							<a href="/cv/cv_arquitecto_intecca_nelson.pdf" download>
								<button className="theme-btn btn-style-two">Descargar CV</button>
							</a>
						</div>
					</div>
				</div>
			</section>


        </>
    )
}
