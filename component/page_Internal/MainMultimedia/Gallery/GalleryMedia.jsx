import { GalleryContainer, arrowPrev, arrowNext } from "./GalleryMedia.module.scss";
import { ImageMedia } from "../image/ImageMedia";
import Slider from "react-slick";
import { useRef, useState } from "react";
import Head from "next/head";

const GalleryMedia = ({ resize, data }) => {
    let showItems;
    const refSlider = useRef(null);
    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        lazyLoad: false,
        autoplay: false,
        speed: 250,
        slidesToShow: 1,
        className: "slider__gallery-note",
        slidesToScroll: 1,
        rows: 1,
        beforeChange: function (currentIndex, nextIndex) {
            const currentdescription = data[nextIndex].data?.title || data[nextIndex].data?.source || data[nextIndex].data?.credits || "";
            setCurrentSlide({ description: currentdescription, key: nextIndex + 1 });
        },
    };
    const [currentSlide, setCurrentSlide] = useState({
        key: 1,
        description: data[0].data?.title || data[0].data?.source || data[0].data?.credits || "",
    });
    if (data?.length > 0) {
        showItems = data.map((item, key) => {
            return <ImageMedia resize={resize} data={item} />;
        });
    }
    function nextSlider(event) {
        event.preventDefault();
        refSlider.current.slickNext();
    }
    function prevSlider(event) {
        event.preventDefault();
        refSlider.current.slickPrev();
    }
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    type="text/css"
                    charset="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
            </Head>
            <div className={GalleryContainer}>
                <Slider {...settings} ref={refSlider}>
                    {showItems}
                </Slider>
                <div className="gallery-legend">
                    <div className="gallery-legend__content">
                        <span>{currentSlide.description}</span>
                        <div className="gallery-legend__pagination">
                            <a className={arrowPrev} href="#" onClick={prevSlider}>
                            </a>
                            {currentSlide.key}/{data.length}
                            <a className={arrowNext} href="#" onClick={nextSlider}>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export { GalleryMedia };
