'use client'
import Link from "next/link";
import { useEffect } from "react";

export default function PortfolioSection() {
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
                                <li className="filter" data-role="button" data-filter="all">Show All</li>
                                <li className="filter" data-role="button" data-filter=".branding">Branding</li>
                                <li className="filter" data-role="button" data-filter=".mockup">Mockups</li>
                                <li className="filter" data-role="button" data-filter=".website">Websites</li>
                                <li className="filter" data-role="button" data-filter=".application">Application</li>
                                <li className="filter" data-role="button" data-filter=".motion">Motion</li>
                            </ul>
                        </div>
                        <div className="filter-list row clearfix">
                            {/*Portfolio Block*/}
                            <div className="portfolio-block mix all website application motion col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image"><img src="/images/resource/image-24.jpg" alt="#" /></div>
                                    <div className="overlay">
                                        <div className="more-link"><Link href="/portfolio-single" className="theme-btn"><i className="fa-solid fa-bars-staggered" /></Link></div>
                                        <div className="inner">
                                            <div className="cat"><span>interior</span></div>
                                            <h5><Link href="/portfolio-single">Influenced by Power</Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Portfolio Block*/}
                            <div className="portfolio-block mix all mockup application col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image"><img src="/images/resource/image-25.jpg" alt="#" /></div>
                                    <div className="overlay">
                                        <div className="more-link"><Link href="/portfolio-single" className="theme-btn"><i className="fa-solid fa-bars-staggered" /></Link></div>
                                        <div className="inner">
                                            <div className="cat"><span>cultural</span></div>
                                            <h5><Link href="/portfolio-single">Influenced by Power</Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Portfolio Block*/}
                            <div className="portfolio-block mix all mockup website motion col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image"><img src="/images/resource/image-26.jpg" alt="#" /></div>
                                    <div className="overlay">
                                        <div className="more-link"><Link href="/portfolio-single" className="theme-btn"><i className="fa-solid fa-bars-staggered" /></Link></div>
                                        <div className="inner">
                                            <div className="cat"><span>interior</span></div>
                                            <h5><Link href="/portfolio-single">Thoughtfully making Space</Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Portfolio Block*/}
                            <div className="portfolio-block mix all mockup application col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image"><img src="/images/resource/image-27.jpg" alt="#" /></div>
                                    <div className="overlay">
                                        <div className="more-link"><Link href="/portfolio-single" className="theme-btn"><i className="fa-solid fa-bars-staggered" /></Link></div>
                                        <div className="inner">
                                            <div className="cat"><span>flats</span></div>
                                            <h5><Link href="/portfolio-single">Unique Solution</Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Portfolio Block*/}
                            <div className="portfolio-block mix all mockup application motion col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image"><img src="/images/resource/image-28.jpg" alt="#" /></div>
                                    <div className="overlay">
                                        <div className="more-link"><Link href="/portfolio-single" className="theme-btn"><i className="fa-solid fa-bars-staggered" /></Link></div>
                                        <div className="inner">
                                            <div className="cat"><span>wood</span></div>
                                            <h5><Link href="/portfolio-single">Magnificent Assembled</Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Portfolio Block*/}
                            <div className="portfolio-block mix all branding website motion col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image"><img src="/images/resource/image-29.jpg" alt="#" /></div>
                                    <div className="overlay">
                                        <div className="more-link"><Link href="/portfolio-single" className="theme-btn"><i className="fa-solid fa-bars-staggered" /></Link></div>
                                        <div className="inner">
                                            <div className="cat"><span>exterior</span></div>
                                            <h5><Link href="/portfolio-single">Innovation in Craft</Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Portfolio Block*/}
                            <div className="portfolio-block mix all branding mockup website col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image"><img src="/images/resource/image-30.jpg" alt="#" /></div>
                                    <div className="overlay">
                                        <div className="more-link"><Link href="/portfolio-single" className="theme-btn"><i className="fa-solid fa-bars-staggered" /></Link></div>
                                        <div className="inner">
                                            <div className="cat"><span>wood</span></div>
                                            <h5><Link href="/portfolio-single">Well-simplified design</Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Portfolio Block*/}
                            <div className="portfolio-block mix all branding mockup motion col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image"><img src="/images/resource/image-31.jpg" alt="#" /></div>
                                    <div className="overlay">
                                        <div className="more-link"><Link href="/portfolio-single" className="theme-btn"><i className="fa-solid fa-bars-staggered" /></Link></div>
                                        <div className="inner">
                                            <div className="cat"><span>metal</span></div>
                                            <h5><Link href="/portfolio-single">Design your dreams with us</Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Portfolio Block*/}
                            <div className="portfolio-block mix all branding application motion col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image"><img src="/images/resource/image-32.jpg" alt="#" /></div>
                                    <div className="overlay">
                                        <div className="more-link"><Link href="/portfolio-single" className="theme-btn"><i className="fa-solid fa-bars-staggered" /></Link></div>
                                        <div className="inner">
                                            <div className="cat"><span>exterior</span></div>
                                            <h5><Link href="/portfolio-single">Level of evolution</Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Portfolio Block*/}
                            <div className="portfolio-block mix all mockup website application col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image"><img src="/images/resource/image-33.jpg" alt="#" /></div>
                                    <div className="overlay">
                                        <div className="more-link"><Link href="/portfolio-single" className="theme-btn"><i className="fa-solid fa-bars-staggered" /></Link></div>
                                        <div className="inner">
                                            <div className="cat"><span>aluminium</span></div>
                                            <h5><Link href="/portfolio-single">You bet it looks so good </Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Portfolio Block*/}
                            <div className="portfolio-block mix all website application motion col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image"><img src="/images/resource/image-34.jpg" alt="#" /></div>
                                    <div className="overlay">
                                        <div className="more-link"><Link href="/portfolio-single" className="theme-btn"><i className="fa-solid fa-bars-staggered" /></Link></div>
                                        <div className="inner">
                                            <div className="cat"><span>high buildings</span></div>
                                            <h5><Link href="/portfolio-single">The Joy of Living</Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Portfolio Block*/}
                            <div className="portfolio-block mix all branding mockup col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image"><img src="/images/resource/image-27.jpg" alt="#" /></div>
                                    <div className="overlay">
                                        <div className="more-link"><Link href="/portfolio-single" className="theme-btn"><i className="fa-solid fa-bars-staggered" /></Link></div>
                                        <div className="inner">
                                            <div className="cat"><span>interior</span></div>
                                            <h5><Link href="/portfolio-single">The Joy of Living</Link></h5>
                                        </div>
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
