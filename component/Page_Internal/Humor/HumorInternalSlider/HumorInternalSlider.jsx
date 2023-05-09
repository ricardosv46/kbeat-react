import style from "./HumorInternalSlider.module.scss";
import Slider from "react-slick";
import { SlotAds } from "component/global/AdsManager/SlotAds";
import { useEffect, useState } from "react";
import resizePrototype from "util/resizePrototype";

const newResize = new resizePrototype();

const IMG_DEFAULT = "https://cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/XJYRXUSSBJBGXDPGZ4LVC5WI24.png";

const HumorInternalSlider = ({ data, adsPage, selected }) => {
    const [show, setShow] = useState(false);
    let showImage = null;
    let newData = [];
    let firstElement;
    const isCarlincatura = true;
    const mb_height = isCarlincatura ? 234 : 197;
    const tb_height = isCarlincatura ? 468 : 393;
    const dk_height = isCarlincatura ? 615 : 517;
    const currentSection = selected.data.categories[0];
    const arrayCategories = [
        { title: "Carlincatura", showName: "Carlincaturas" },
        { title: "Molina", showName: "de Molina" },
        { title: "Heduardicidios", showName: "Heduardicidios" },
    ];
    const showedCategory = arrayCategories.find((categoryItem) => categoryItem.title == currentSection.name)?.showName;
    const cssName = style.internal;
    const [title, setTitle] = useState(selected?.title ?? "");
    const settings = {
        dots: false,
        arrow: false,
        infinite: false,
        autoplay: false,
        lazyLoad: false,
        className: "SwiperContainer",
        adaptiveHeight: false,
        fade: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: function (oldIndex, newIndex) {
            setTitle(newData[newIndex]?.title);
        },
    };

    if (data?.length > 0 && selected) {
        const idArr = data.map((item) => item._id);
        const selectedIsInData = selected && idArr.includes(selected._id);

        if (selectedIsInData) {
            firstElement = data.find((item) => item._id === selected._id);
        } else {
            firstElement = selected;
        }

        if (firstElement) {
            newData.push(firstElement);
        }

        data.map((item, key) => {
            if (selected._id !== item._id) {
                newData.push(item);
            }

            if (key === 3) {
                const ads1 = {
                    _id: "ads_galeria1",
                    type: "ads",
                    ads_cont: "Galeria1",
                    additional_properties: {
                        comments: [],
                        inline_comments: [],
                    },
                    content: [],
                };
                newData.push(ads1);
            }

            if (key === 7) {
                const ads2 = {
                    _id: "ads_galeria2",
                    type: "ads",
                    ads_cont: "Galeria2",
                    additional_properties: {
                        comments: [],
                        inline_comments: [],
                    },
                    content: [],
                };
                newData.push(ads2);
            }

            if (key === 11) {
                const ads3 = {
                    _id: "ads_galeria3",
                    type: "ads",
                    ads_cont: "Galeria3",
                    additional_properties: {
                        comments: [],
                        inline_comments: [],
                    },
                    content: [],
                };
                newData.push(ads3);
            }

            if (key === 15) {
                const ads4 = {
                    _id: "ads_galeria4",
                    type: "ads",
                    ads_cont: "Galeria4",
                    additional_properties: {
                        comments: [],
                        inline_comments: [],
                    },
                    content: [],
                };
                newData.push(ads4);
            }

            if (key === 19) {
                const ads5 = {
                    _id: "ads_galeria5",
                    type: "ads",
                    ads_cont: "Galeria5",
                    additional_properties: {
                        comments: [],
                        inline_comments: [],
                    },
                    content: [],
                };
                newData.push(ads5);
            }

            if (key === 23) {
                const ads6 = {
                    _id: "ads_galeria6",
                    type: "ads",
                    ads_cont: "Galeria6",
                    additional_properties: {
                        comments: [],
                        inline_comments: [],
                    },
                    content: [],
                };
                newData.push(ads6);
            }

            if (key === 27) {
                const ads7 = {
                    _id: "ads_galeria7",
                    type: "ads",
                    ads_cont: "Galeria7",
                    additional_properties: {
                        comments: [],
                        inline_comments: [],
                    },
                    content: [],
                };
                newData.push(ads7);
            }
        });

        showImage = newData.map((item, key) => {
            if (item.type && item.type === "ads") {
                return <SlotAds data={adsPage?.ads?.data} type={item.ads_cont} key={`${key}-${item?._id}`} />;
            } else {
                return (
                    <div key={`item-humor-${key}-${item?.title}`} dataheadline={item?.title}>
                        <figure className={`${style.outside_img_humor} ${cssName}`}>
                            <picture>
                                <source
                                    media="(min-width: 1000px)"
                                    srcSet={newResize.resizeWapa(item?.data?.multimedia[0]?.path || IMG_DEFAULT, 970, dk_height)}
                                />
                                <source
                                    media="(min-width: 768px)"
                                    srcSet={newResize.resizeWapa(item?.data?.multimedia[0]?.path || IMG_DEFAULT, 738, tb_height)}
                                />
                                <img
                                    className={style.inside_img_humor}
                                    src={newResize.resizeWapa(item?.data?.multimedia[0]?.path || IMG_DEFAULT, 370, mb_height)}
                                    title={item?.headlines?.basic}
                                    alt={item?.headlines?.basic}
                                />
                            </picture>
                        </figure>
                    </div>
                );
            }
        });
    }
    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <>
            {show && (
                <div className={style.container__humorInternal}>
                    <style>{`
            .ContentSection{font-size:1.1rem;font-weight:500;line-height:1;text-transform:uppercase}.ContentSectionLink{color:#e60000;display:block;margin-bottom:.5rem}.ContentTitle{font-size:1.2rem;font-weight:normal;line-height:1}@media(min-width: 601px){.ContentTitle{font-size:1.4rem}}
            .slick-slider{position:relative;display:block;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list{position:relative;display:block;overflow:hidden;margin:0;padding:0}.slick-list:focus{outline:0}.slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-list,.slick-slider .slick-track{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}.slick-track{position:relative;top:0;left:0;display:block;margin-left:auto;margin-right:auto}.slick-track:after,.slick-track:before{display:table;content:''}.slick-track:after{clear:both}.slick-loading .slick-track{visibility:hidden}.slick-slide{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide{float:right}.slick-slide img{display:block}.slick-slide.slick-loading img{display:none}.slick-slide.dragging img{pointer-events:none}.slick-initialized .slick-slide{display:block}.slick-loading .slick-slide{visibility:hidden}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden{display:none}
            .slick-loading .slick-list{background:#fff url('/static/images/ajax-loader.gif') center center no-repeat}@font-face{font-family:slick;font-weight:400;font-style:normal;font-display:swap;src:url('/static/fonts/Slick/slick.eot');src:url('/static/fonts/Slick/slick.eot?#iefix') format('embedded-opentype'),url('/static/fonts/Slick/slick.woff') format('woff'),url('/static/fonts/Slick/slick.ttf') format('truetype'),url('/static/fonts/Slick/slick.svg#slick') format('svg')}.slick-next,.slick-prev{font-size:0;line-height:0;position:absolute;top:50%;display:block;width:20px;height:20px;padding:0;-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);cursor:pointer;color:transparent;border:none;outline:0;background:0 0}.slick-next:focus,.slick-next:hover,.slick-prev:focus,.slick-prev:hover{color:transparent;outline:0;background:0 0}.slick-next:focus:before,.slick-next:hover:before,.slick-prev:focus:before,.slick-prev:hover:before{opacity:1}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.25}.slick-next:before,.slick-prev:before{font-family:slick;font-size:20px;line-height:1;opacity:.75;color:#fff;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-prev{left:-25px}[dir=rtl] .slick-prev{right:-25px;left:auto}.slick-prev:before{content:'←'}[dir=rtl] .slick-prev:before{content:'→'}.slick-next{right:-25px}[dir=rtl] .slick-next{right:auto;left:-25px}.slick-next:before{content:'→'}[dir=rtl] .slick-next:before{content:'←'}.slick-dotted.slick-slider{margin-bottom:30px}.slick-dots{position:absolute;bottom:-25px;display:block;width:100%;padding:0;margin:0;list-style:none;text-align:center}.slick-dots li{position:relative;display:inline-block;width:20px;height:20px;margin:0 5px;padding:0;cursor:pointer}.slick-dots li button{font-size:0;line-height:0;display:block;width:20px;height:20px;padding:5px;cursor:pointer;color:transparent;border:0;outline:0;background:0 0}.slick-dots li button:focus,.slick-dots li button:hover{outline:0}.slick-dots li button:focus:before,.slick-dots li button:hover:before{opacity:1}.slick-dots li button:before{font-family:slick;font-size:6px;line-height:20px;position:absolute;top:0;left:0;width:20px;height:20px;content:'•';text-align:center;opacity:.25;color:#000;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-dots li.slick-active button:before{opacity:.75;color:#000}

            .slick-next, .slick-prev {
                z-index: 1;
                height: 30px;
                width: 30px;
                background: #fff;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                border-radius: 50%;
                padding: 7px;
            }
            .slick-next:before, .slick-prev:before {
                line-height: 0;
                color: #FF0000;
                font-size: 20px;
            }
            
            .slick-prev {
                left: 10px;
            }
            .slick-next {
                right: 10px;
            }
            .slick-next:before,
            .slick-prev:before {
                content: "";
                display: block;
                background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMzE0MjQgMS42MDAwM0w1LjcxNDI5IC05Ljk5MTE3ZS0wN0w5Ljk5MTE3ZS0wNyA1LjcxNDI5TDUuNzE0MjkgMTEuNDI4Nkw3LjMxNDI1IDkuODI4NThMNC4zNDI4NCA2Ljg1NzE0TDE2IDYuODU3MTRMMTYgNC41NzE0M0w0LjM0Mjg0IDQuNTcxNDNMNy4zMTQyNCAxLjYwMDAzWiIgZmlsbD0iIzUzNTM1MyIvPgo8L3N2Zz4K);
                height: 100%;
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
            }

            .slick-next:before {
                background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguNjg1NzYgMTAuNEwxMC4yODU3IDEyTDE2IDYuMjg1NzFMMTAuMjg1NyAwLjU3MTQzTDguNjg1NzUgMi4xNzE0MkwxMS42NTcyIDUuMTQyODZMLTEuNzk4NDFlLTA2IDUuMTQyODZMLTEuMTk4OTRlLTA2IDcuNDI4NThMMTEuNjU3MiA3LjQyODU3TDguNjg1NzYgMTAuNFoiIGZpbGw9IiM1MzUzNTMiLz4KPC9zdmc+Cg==);
            }

            .slick-next:focus, .slick-next:hover, .slick-prev:focus, .slick-prev:hover {
                background: rgba(255,255,255,.7);
            }

            
            @media (min-width: 768px) {
                .ContentTitle:empty {
                    min-height: 22px;
                }
                .slick-next, .slick-prev {
                    height: 48px;
                    width: 48px;
                }
                .slick-prev {
                    left: 24px;
                }
                .slick-next {
                    right: 24px;
                }
                .slick-next:before, .slick-prev:before {
                    font-size: 30px;
                }
                .slick-next, .slick-prev {
                    padding: 15px;
                }
            }
        `}</style>
                    <Slider {...settings}>{showImage}</Slider>
                    <h1 className={style.title}>{title}</h1>
                    <div className={style.seeMore}>
                        <a href={currentSection.slug} className={style.seeMore_button}>
                            VER MÁS {showedCategory.toUpperCase()}
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};

export { HumorInternalSlider };
