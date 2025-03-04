import Link from "next/link";

export default function ContactSection() {
    return (
        <>
            <section className="contact-section">
                <div className="auto-container">
                    <div className="def-title-box">
                        <div className="patt"><span /></div>
                        <div className="subtitle">get in touch</div>
                        <h3>Contacto</h3>
                    </div>
                    <div className="info-box">
                        <div className="row clearfix">
                            {/*Block*/}
                            <div className="info-block col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="inner">
                                        <div className="icon-box"><span className="fa fa-phone" /></div>
                                        <h5>Contacto telefónico</h5>
                                        <div className="info"><Link href="tel:(+34)638851459">(+34) 638 85 14 59</Link></div>
                                    </div>
                                </div>
                            </div>
                            {/*Block*/}
                            <div className="info-block col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="inner">
                                        <div className="icon-box"><span className="far fa-clock" /></div>
                                        <h5>Horario</h5>
                                        <div className="info">Lunes - Viernes  /  08:00-19:00</div>
                                    </div>
                                </div>
                            </div>
                            {/*Block*/}
                            <div className="info-block col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                <div className="inner-box">
                                    <div className="inner">
                                        <div className="icon-box"><span className="fa fa-map-marker-alt" /></div>
                                        <h5>Dirección</h5>
                                        <div className="info">Calle Mártires Oblatos
                                        22, Madrid</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-box">
                        <div className="row clearfix">
                            <div className="form-col col-xl-8 col-lg-12 col-md-12 col-sm-12">
                                <h5>Hablamos</h5>
                                <div className="contact-form">
                                    <form method="post" action="contact.js">
                                        <div className="row clearfix">
                                            <div className="inner-col col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <div className="field-label"><span className="icon fa fa-user" /> Nombre</div>
                                                    <div className="field-inner"><input type="text" name="fieldname" placeholder required /><i className="dot" /></div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="field-label"><span className="icon far fa-envelope" /> E-mail</div>
                                                    <div className="field-inner"><input type="email" name="fieldname" placeholder required /><i className="dot" /></div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="field-label"><span className="icon far fa-link" /> Número teléfono</div>
                                                    <div className="field-inner"><input type="text" name="fieldname" placeholder required /><i className="dot" /></div>
                                                </div>
                                            </div>
                                            <div className="inner-col col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <div className="field-label">Tu mensaje</div>
                                                    <div className="field-inner"><textarea name="fieldname" placeholder required defaultValue={""} /><i className="dot" /></div>
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" className="theme-btn btn-style-two"><span>Enviar</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/*Map Column
                                <div className="map-col col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                    <div className="inner">
                                        <div className="map-box"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6072.830057397491!2d-3.806994723596738!3d40.44395025398164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41865df54b4185%3A0x121e32541de5d5a0!2sC.%20M%C3%A1rtires%20Oblatos%2C%2022%2C%2028224%20Pozuelo%20de%20Alarc%C3%B3n%2C%20Madrid!5e0!3m2!1ses!2ses!4v1741080961681!5m2!1ses!2ses" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
                                    </div>
                                </div>
                            */}
                        
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
