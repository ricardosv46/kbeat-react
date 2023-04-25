import { useRef } from "react";

const TodayTopic = ({ data, type, styleClass }) => {
    /* const { menu } = data; */
    let isAmp = false;

    if (type && type === "amp") isAmp = true;

    if (data?.menu?.links?.length > 0) {
        const { menu } = data;
        let setItem = menu?.links?.map((item, key) => {
            const { path, title } = item;

            return (
                <li itemProp="name" key={`anchor-${key}`} style={{ display: "inline-block" }}>
                    <a
                        itemProp="url"
                        href={path || "https://larepublica.pe"}
                        style={isAmp ? { padding: "12px" } : { padding: "0 12px" }}
                        className="nav__inside"
                    >
                        {title || "LR"}
                    </a>
                </li>
            );
        });
        return (
            <>
                <div className={`wrapper-nav ${styleClass || ""}`} id="menu__today">
                    <a href="/ultimas-noticias" className="nav__side-left">HOY:</a>
                    {(isAmp && (
                        <ul className="nav__side-right">
                            <amp-carousel height="14" type="carousel">
                                {setItem}
                            </amp-carousel>
                        </ul>
                    )) || (
                            <ul className="nav__side-right" style={{ padding: 0, margin: 0 }}>
                                {setItem}
                            </ul>
                    )}
                </div>
                {!isAmp && (
                    <style>{`
                        .wrapper-nav {
                            height: 30px;
                            background:#FFF!important;
                            font-size: 9px;
                            font-weight: 500;
                            padding:0 15px;
                            display:flex;
                            align-items:center;
                            font-family: Robot, sans-serif;
                            position: relative;
                        }
                        .nav__side-left {
                            color: #E8495F;
                            width:30px;
                            font-weight: 700;
                            font-size: 12px;
                        }
                        .nav__side-right {
                            white-space:nowrap;
                            overflow: auto;
                            text-transform:uppercase;
                            margin-left: 12px !important;
                            color: #535353;
                            font-weight: 700;
                        }
                        .nav__inside {
                            white-space:nowrap;
                            position:relative;
                            text-decoration: none;
                            color: #535353;
                            font-weight: 700;
                            line-height:12px;
                        }
                        .nav__inside:hover {
                            color:#E8495F;
                        }
                        @media(min-width: 999px) {
                            .wrapper-nav {
                                font-size:10px;
                            }
                            // .nav__side-right::-webkit-scrollbar-track {
                            //     background-color:transparent !important;
                            // }
                            // .nav__side-right::-webkit-scrollbar-thumb {
                            //     background:#ddd;
                            // }
                            // .nav__side-right::-webkit-scrollbar {
                            //     height:4px;
                            // }
                        }
                    `}</style>
                )}
            </>
        );
    }

    return null;
};

export { TodayTopic };
