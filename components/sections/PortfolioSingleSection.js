import Link from "next/link";

export default function PortfolioSingleSection() {
    return (
        <>
            <section className="project-details">
                <div className="auto-container">
                    <div className="upper-content">
                        <div className="row clearfix">
                            {/*Text Col*/}
                            <div className="text-col col-lg-5 col-md-12 col-sm-12">
                                <div className="inner">
                                    <h3>Abstract company branding design</h3>
                                    <div className="scope">
                                        <div className="ttl"><span>Scope</span><i className="fa fa-ellipsis-v" /></div>
                                        <ul>
                                            <li>Brand Strategy</li>
                                            <li>Identity Design</li>
                                            <li>Website</li>
                                            <li>Campaigns</li>
                                        </ul>
                                    </div>
                                    <div className="text">Trends and common requests can be utilized to make valuable changes to the way an organization interacts with its team members.</div>
                                </div>
                            </div>
                            {/*Image Col*/}
                            <div className="image-col col-lg-7 col-md-12 col-sm-12">
                                <div className="inner">
                                    <div className="image"><img src="/images/resource/image-35.jpg" alt="" /></div>
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
