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
    //Determinar si estamos en el cliente
    const [isClient, setIsClient] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [scroll, setScroll] = useState(0);
    const [isDivActive, setIsDivActive] = useState(false);
    const [isBodyActive, setIsBodyActive] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Detectar cambios en el tamaño de la pantalla
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 700);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const onScroll = () => setScroll(window.scrollY > 100);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (isBodyActive) {
            document.body.classList.add('active-body-class');
        } else {
            document.body.classList.remove('active-body-class');
        }
    }, [isBodyActive]);

    useEffect(() => {
        if (addBodyClass) {
            document.body.classList.add(addBodyClass);
        }
    }, []);

    useEffect(() => {
        const WOW = require('wowjs');
        window.wow = new WOW.WOW({ live: false });
        window.wow.init();
    }, []);

    return (
        <>
            <div id="top" />
            <AddClassBody />
            <div className="site-container">
                <div className="menu-backdrop"></div>

                {isMobile ? <Header2 /> : <Header1 scroll={scroll} handleClick={() => setIsDivActive(!isDivActive)} isDivActive={isDivActive} />}

                <MobileMenu />

                <div className="scroll-container">
                    <div className={`main-content-container ${isMobile ? 'mobile-class' : ''}`}>
                        <CustomCursor />
                        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
                        {children}
                    </div>
                </div>

                {footerStyle === 1 && <Footer1 />}
                {footerStyle === 2 && <Footer2 />}

                <BackToTop onClick={() => scroll()} />
            </div>
        </>
    );
}

