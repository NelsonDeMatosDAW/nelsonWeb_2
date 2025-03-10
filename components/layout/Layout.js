
'use client'
import { useEffect, useState } from "react"
import AddClassBody from "../elements/AddClassBody"
import BackToTop from "../elements/BackToTop"
import CustomCursor from "../elements/CustomCursor"
import Breadcrumb from './Breadcrumb'
import MobileMenu from './MobileMenu'
import Footer1 from './footer/Footer1'
import Footer2 from "./footer/Footer2"
import Header1 from "./header/Header1"
import Header2 from "./header/Header2"

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children, addBodyClass }) {
    const [scroll, setScroll] = useState(0)
    // Moblile Menu
    const [isActive, setIsActive] = useState(false);

    // Function to handle the click event
    const [isBodyActive, setIsBodyActive] = useState(false);
    const [isDivActive, setIsDivActive] = useState(false);

    // Function to handle the click event for both body and div
    const handleClick = () => {
        setIsBodyActive(!isBodyActive);  // Toggle body class
        setIsDivActive(!isDivActive);    // Toggle div class
    };

    // useEffect to add/remove class to body
    useEffect(() => {
        if (isBodyActive) {
            document.body.classList.add('active-body-class');
        } else {
            document.body.classList.remove('active-body-class');
        }
    }, [isBodyActive]);

    //Adding necessary class for a specific page
    useEffect(() => {
        if (addBodyClass) {
            document.body.classList.add(addBodyClass);
        }
    }, [])


    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()

        const onScroll = () => {
            setScroll(window.scrollY > 100)
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)

    }, [])
    return (
        <>
            <div id="top" />
            <AddClassBody />
            <div className="site-container">
                {/* <div className="src="/images"></div> */}
                <div className="menu-backdrop"></div>


                {!headerStyle && <Header1 scroll={scroll} handleClick={handleClick} isDivActive={isDivActive} />}
                {headerStyle == 1 ? <Header1 scroll={scroll} handleClick={handleClick} isDivActive={isDivActive} /> : null}
                {headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
                <MobileMenu />

                <div className="scroll-container">
                    <div className="main-content-container">
                        <CustomCursor />
                        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
                        {children}
                    </div>
                </div>

                {!footerStyle && null}
                {footerStyle == 1 ? < Footer1 /> : null}
                {footerStyle == 2 ? < Footer2 /> : null}

                <BackToTop onClick={() => scroll()} />
            </div>
        </>
    )
}
