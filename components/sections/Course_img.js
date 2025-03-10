import Link from "next/link";


export default function Course_img() {
    return (
        <>
            <section className="team-section">
                <div className="auto-container">
                    
                    <div className="team">
                        <div className="row clearfix">
                            {/*Block*/}
                            <div className="team-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image-box"><Link href="#"><img src="/images/cursos/javascript.jpg" alt="" /></Link></div>
                                    <div className="cat"><span>programación</span></div>
                                    <div className="social">

                                        <Link href="www.linkedin.com/in/nelsondematos" target="_blank"><i className="fab fa-linkedin" /></Link>
                                        <Link href="#" target="_blank"><i className="fab fa-github" /></Link>
                                    </div>
                                    <div className="name"><Link href="#">Eduntin Academy</Link></div>
                                </div>
                            </div>
                            {/*Block*/}
                            <div className="team-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image-box"><Link href="#"><img src="/images/cursos/scrum.jpg" alt="" /></Link></div>
                                    <div className="cat"><span>SCRUM</span></div>
                                    <div className="social">

                                        <Link href="www.linkedin.com/in/nelsondematos" target="_blank"><i className="fab fa-linkedin" /></Link>
                                        <Link href="#" target="_blank"><i className="fab fa-github" /></Link>
                                    </div>
                                    <div className="name"><Link href="#">Fundación Telefónica</Link></div>
                                </div>
                            </div>
                            {/*Block*/}
                            <div className="team-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image-box"><Link href="#"><img src="/images/cursos/git.jpg" alt="" /></Link></div>
                                    <div className="cat"><span>GIT</span></div>
                                    <div className="social">

                                        <Link href="www.linkedin.com/in/nelsondematos" target="_blank"><i className="fab fa-linkedin" /></Link>
                                        <Link href="#" target="_blank"><i className="fab fa-github" /></Link>
                                    </div>
                                    <div className="name"><Link href="#">Eduntin Academy</Link></div>
                                </div>
                            </div>
                            {/*Block*/}
                            <div className="team-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image-box"><Link href="#"><img src="/images/cursos/certificado_iot_redi.jpg" alt="" /></Link></div>
                                    <div className="cat"><span>Ciberseguridad</span></div>
                                    <div className="social">

                                        <Link href="www.linkedin.com/in/nelsondematos" target="_blank"><i className="fab fa-linkedin" /></Link>
                                        <Link href="#" target="_blank"><i className="fab fa-github" /></Link>
                                    </div>
                                    <div className="name"><Link href="#">INCIBE</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}