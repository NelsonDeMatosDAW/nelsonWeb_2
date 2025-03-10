'use client';
import FsLightbox from "fslightbox-react";
import { useState } from "react";

function FSL() {
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    function openLightboxOnSlide(index) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: index + 1 // increment index by 1 to match slide numbering
        });
    }

    const data = [
        { img: "images/main-slider/image-1.jpg" },
        { img: "images/main-slider/image-2.jpg" }
    ];

    return (
        <>
            {data.map((d, index) => (
                <img src={d.img} onClick={() => openLightboxOnSlide(index)} style={{ height: "150px", margin: "10px" }} />
            ))}
            <FsLightbox
                toggler={lightboxController.toggler}
                sources={data.map((d) => d.img)}
                slide={lightboxController.slide}
            />
        </>
    );
}

export default FSL;
