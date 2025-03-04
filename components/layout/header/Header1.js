'use client'
import Link from "next/link";
import { useState } from "react";

export default function Header1({ scroll, isMobileMenu, handleClick, isDivActive }) {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleDropdownClick = (index) => {
        if (activeMenu === index) {
            // Close the currently open dropdown
            setActiveMenu(null);
        } else {
            // Open the clicked dropdown
            setActiveMenu(index);
        }
    };

    return (
        <>
            <header className="main-header-bar alt-logo">
                <div className="line-one" />
                <div className="line-two" />
                {/*Header-Upper*/}
                <div className="header-bar-inner">
                    <div className="outer-box clearfix">
                        {/*Nav Toggler*/}
                        <div className="nav-toggler"><button onClick={handleClick} className="toggler-btn"><span className="bar bar-one" /><span className="bar bar-two" /><span className="bar bar-three" /></button></div>
                        {/*Social Links*/}
                        <div className="social-links">
                            <ul className="clearfix">
                                <li><Link href="#"><span className="fab fa-instagram" /></Link></li>
                                <li><Link href="#"><span className="fab fa-twitter-square" /></Link></li>
                                <li><Link href="#"><span className="fab fa-facebook-square" /></Link></li>
                            </ul>
                        </div>
                        {/*Copyright Text*/}
                        <div className="copyright">© Vosio {new Date().getFullYear()}</div>
                    </div>
                    {/*alt="" Logo Box*/}
                    <div className="alt-logo-box"><Link href="/"><img src="/images/logo.png" alt="" /></Link></div>
                    {/*Nav Bg Box*/}
                    <div className="nav-bg-box" />
                    {/*Main Nav Outer*/}
                    <div className={isDivActive ? 'main-nav-outer now-visible' : 'main-nav-outer'}>
                        <div onClick={handleClick} className="nav-closer"><img src="/images/icons/close-icon.png" alt="" /></div>
                        <div className="outer-nav-box">
                            <div className="top-bg" />
                            <div className="bottom-bg" />
                            <div className="main-nav-box" data-scrollbar>
                                {/*Logo Box*/}
                                <div className="main-logo-box"><Link href="/"><img src="/images/logo.png" alt="" /></Link></div>
                                <div className="main-nav">
                                    <ul className="navigation">
                                        <li>
                                            <Link href="/" >Home</Link>
                                        </li>
                                        <li>
                                            <Link href="/portfolio">Portfolio</Link>
                                            {/**
                                                <ul>
                                                    <li><Link href="/portfolio">portfolio</Link></li>
                                                    <li><Link href="/portfolio-single">project details</Link></li>
                                                </ul>
                                             */
                                            }
                                        </li>
                                        <li><Link href="/about">Conóceme</Link></li>
                                        <li>
                                            <Link href="/blog" >Blog</Link>
                                            
                                        </li>
                                        <li><Link href="/contact">Contacto</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}
            </header>

        </>
    )
}
