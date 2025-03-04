import Link from "next/link";


export default function TeamSection1() {
    return (
        <>
            <section className="team-section">
                <div className="auto-container">
                    <div className="def-title-box">
                        <div className="patt"><span /></div>
                        <div className="subtitle">team members</div>
                        <h3>Amazing Staff</h3>
                    </div>
                    <div className="team">
                        <div className="row clearfix">
                            {/*Block*/}
                            <div className="team-block col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image-box"><Link href="#"><img src="/images/resource/team-1.jpg" alt="" /></Link></div>
                                    <div className="cat"><span>Coding</span></div>
                                    <div className="social">
                                        <Link href="#"><i className="fab fa-facebook-square" /></Link>
                                        <Link href="#"><i className="fab fa-twitter-square" /></Link>
                                        <Link href="#"><i className="fab fa-instagram" /></Link>
                                    </div>
                                    <div className="name"><Link href="#">Mike Gordon</Link></div>
                                </div>
                            </div>
                            {/*Block*/}
                            <div className="team-block col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image-box"><Link href="#"><img src="/images/resource/team-2.jpg" alt="" /></Link></div>
                                    <div className="cat"><span>Marketing</span></div>
                                    <div className="social">
                                        <Link href="#"><i className="fab fa-facebook-square" /></Link>
                                        <Link href="#"><i className="fab fa-twitter-square" /></Link>
                                        <Link href="#"><i className="fab fa-instagram" /></Link>
                                    </div>
                                    <div className="name"><Link href="#">David Rich</Link></div>
                                </div>
                            </div>
                            {/*Block*/}
                            <div className="team-block col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image-box"><Link href="#"><img src="/images/resource/team-3.jpg" alt="" /></Link></div>
                                    <div className="cat"><span>SEO</span></div>
                                    <div className="social">
                                        <Link href="#"><i className="fab fa-facebook-square" /></Link>
                                        <Link href="#"><i className="fab fa-twitter-square" /></Link>
                                        <Link href="#"><i className="fab fa-instagram" /></Link>
                                    </div>
                                    <div className="name"><Link href="#">Noah Clark</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
