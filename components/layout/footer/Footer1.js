import Link from "next/link"
import { useEffect, useState } from "react"

export default function Footer1() {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    return (
        <>
            <footer className="main-footer">
                <button className="scroll-top scroll-to-target" onClick={() => scrollToTop()}><span className="icon fa fa-arrow-alt-circle-up" /></button>
                <div className="footer-inner">
                    <div className="auto-container">
                        <div className="footer-logo"><Link href="index.html"><img src="/images/nelsondematosdev_blanco.png" alt="#" /></Link></div>
                        <div className="info">
                            <div className="row clearfix">
                                {/*Block direccion*/}
                                <div className="info-block col-lg-6 col-md-6 col-sm-12">
                                    <div className="i-title">Dirección</div>
                                    <div className="text">Calle Mártires Oblatos <br />22, Madrid</div>
                                </div>
                                {/*Block contacto*/}
                                <div className="info-block col-lg-6 col-md-6 col-sm-12">
                                    <div className="i-title">Contacto</div>
                                    <div className="text"><Link href="tel:+34638851459">+34 638 85 14 59</Link> <br /> <Link href="mailto:nelsondematos16@gmail.com">nelsondematos16@gmail.com</Link></div>
                                </div>
                            </div>
                        </div>

                        {/* Mapa de Google */}
                        <div className="map-container">
                            <iframe 
                                width="100%" 
                                height="300"
                                style={{ border: 0, borderRadius: '25px' }}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6072.830057397491!2d-3.806994723596738!3d40.44395025398164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41865df54b4185%3A0x121e32541de5d5a0!2sC.%20M%C3%A1rtires%20Oblatos%2C%2022%2C%2028224%20Pozuelo%20de%20Alarc%C3%B3n%2C%20Madrid!5e0!3m2!1ses!2ses!4v1741080961681!5m2!1ses!2ses"
                                allowFullScreen 
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
