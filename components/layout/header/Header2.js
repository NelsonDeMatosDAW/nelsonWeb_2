import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Header1 from "./Header1";

import Link from "next/link";

export default function Header2({ scroll, isMobileMenu, handleMobileMenu }) {

    return (
        <>
            {/*Header-Upper*/}
            <div className="box-copy-fixed">
                        {/*Social Links*/}
                        <div className="social-links-mobil">
                            <ul className="clearfix">
                                <li><Link href="https://www.linkedin.com/in/nelsondematos" target="blanck_"><i className="fab fa-linkedin" /></Link></li>
                                <li><Link href="https://github.com/NelsonDeMatosDAW" target="blanck_"><i className="fab fa-github" /></Link></li>
                            </ul>
                        </div>
                        {/*Copyright Text*/}
                        <div className="copyright-mobil"><p>© NelsonDeMatos {new Date().getFullYear()}</p></div>
            <div/>

            <div className="main-header-bar-mobil">
                    {/*Nav Bg Box*/}
                    <div className="nav-bg-box">
                        <div className="main-nav">
                            <ul className="navigation">
                                <li>
                                    <Link href="/" ><i className="fas fa-home" /></Link>
                                </li>
                                <li>
                                    <Link href="/portfolio"><i className="fas fa-briefcase" /></Link>
                                </li>
                                <li>
                                    <Link href="/about"><i className="fas fa-user" /></Link>
                                </li>
                                <li>
                                    <Link href="/blog" ><i className="fas fa-blog" /></Link>    
                                </li>
                                <li>
                                    <Link href="/contact"><i className="fas fa-envelope" /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}
            </div>
        </>
    );
}

