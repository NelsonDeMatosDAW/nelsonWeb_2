import Link from "next/link";


export default function ServicesSection1() {
    return (
        <>
            <section className="services-section">
                <div className="auto-container">
                    <div className="def-title-box">
                        <div className="patt"><span /></div>
                        <div className="subtitle">Mi día a día</div>
                        <h3>Teconologías que uso</h3>
                    </div>
                    <div className="services">
                        <div className="row clearfix">
                            {/*Block*/}
                            <div className="service-block col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="inner">
                                        <div className="icon-box"><span className="fab fa-react" /></div>
                                        <h5>React</h5>
                                        <div className="text">Front</div>
                                    </div>
                                </div>
                            </div>
                            {/*Block*/}
                            <div className="service-block col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="inner">
                                        <div className="icon-box"><span className="fab fa-node" /></div>
                                        <h5>Node JS</h5>
                                        <div className="text">Back</div>
                                    </div>
                                </div>
                            </div>
                            {/*Block*/}
                            <div className="service-block col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="inner">
                                        <div className="icon-box"><span className="fas fa-database" /></div>
                                        <h5>MongoDB</h5>
                                        <div className="text">BBDD</div>
                                    </div>
                                </div>
                            </div>
                            {/*Block*/}
                            <div className="service-block col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="inner">
                                        <div className="icon-box"><span className="fas fa-server" /></div>
                                        <h5>Express</h5>
                                        <div className="text">Server Web</div>
                                    </div>
                                </div>
                            </div>
                            {/*Block*/}
                            <div className="service-block col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="inner">
                                        <div className="icon-box"><span className="fab fa-bootstrap" /></div>
                                        <h5>Boostrap</h5>
                                        <div className="text">FrameWork CSS</div>
                                    </div>
                                </div>
                            </div>
                            {/*Block*/}
                            <div className="service-block col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="inner">
                                        <div className="icon-box"><span className="fab fa-css3-alt" /></div>
                                        <h5>TailWind CSS</h5>
                                        <div className="text">FrameWork Utilitario</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
