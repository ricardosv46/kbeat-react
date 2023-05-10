import React, { useState, useEffect } from "react";
import { TodayTopic } from "component/global/Header/TodayTopic/TodayTopic.jsx";
import { MenuMovil } from "component/global/Header/MenuMovil/MenuMovil.jsx";
import { SlotAds } from "../AdsManager/SlotAds";
import { InputSearch } from "component/global/InputSearch/InputSearch";
import style from "component/global/Header/Header.module.scss"
import { Networks } from "component/global/Header/Networks/Networks";

const LogoLR = "/static/logo-kbeat.svg";

let styleMenuFixed = {};

const Header = (props) => {
    const { mainData, topicData, adsPage, hideAdTop, setShowSearch, showSearch, refBtnSearch, internal, type } = props;

    const [state, setState] = useState({
        items: null,
        menuMovil: {},
        menuBuscador: false,
        showFixMenu: false,
        colorHeader: null,
        resultSearch: "",
    });
    const [percentVisible, setPercentVisible] = useState(0);

    const [abrirMenu, setAbrirMenu] = useState(false);

    const obtenerMenuBuscador = mainData?.menu;

    useEffect(() => {
        setState({
            ...state,
            menuMovil: obtenerMenuBuscador,
        });
        document.addEventListener("scroll", trackScrolling);

        return () => {
            document.removeEventListener("scroll", trackScrolling);
        };
    }, []);
    
    const trackScrolling = () => {
        const wrappedElementHeader = document.getElementById("header");
        const headerHeight = wrappedElementHeader.offsetHeight;
        const adsContainer = document.querySelector(".bl-Ads");
        adsContainer.classList.toggle("bl-Ads--fixed", adsContainer.getBoundingClientRect().top < 0);
        adsContainer.classList.toggle("bl-Ads--headerFixed", wrappedElementHeader?.getBoundingClientRect().bottom < 0);
        wrappedElementHeader.querySelector("#menu__today").classList.toggle("sticky", wrappedElementHeader?.getBoundingClientRect().bottom < 0);
        wrappedElementHeader.querySelector("#container__header").classList.toggle("sticky", wrappedElementHeader?.getBoundingClientRect().bottom < 0);
        wrappedElementHeader.querySelector("#container__header").classList.toggle("hide-top-news", document.body.getBoundingClientRect().top < -380);
        document.body.style.marginTop = headerHeight * "px";
        const containerColor = document.querySelector("#container__header");
        
        if (wrappedElementHeader && wrappedElementHeader.getBoundingClientRect().bottom < 0) {
            setState({
                ...state,
                showFixMenu: true,
                menuMovil: obtenerMenuBuscador,
            });
            containerColor.classList.toggle("container__fixed", document.body.getBoundingClientRect().top < -370);
        } else {
            setState({
                ...state,
                showFixMenu: false,
                menuMovil: obtenerMenuBuscador,
            });
            containerColor.classList.remove("container__fixed", document.body.getBoundingClientRect().top < -260);
        }
    };

    const openMenuFn = () => {
        if (abrirMenu) {
            closeAllSections();
        } else {
            setAbrirMenu(true);
        }
    };

    const closeAllSections = () => {
        setAbrirMenu(false);
        setState({
            ...state,
            menuBuscador: false,
        });
    };

    useEffect(() => {
        const handleScroll = () => {
        let interna_content = document?.getElementById('interna_content')
        if (!interna_content) return;
        let scrollTop = window.pageYOffset
        let scrollBottom = interna_content.offsetHeight - window.innerHeight
        let scrollPercent = scrollTop / scrollBottom * 100 ;
        
          setPercentVisible(scrollPercent);
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const { showFixMenu, menuMovil } = state;
    const showProgressBar = type ==='article' || type ==='article_live' || type ==='live' || type==='inlive' || false

    const showSubMenu = (
        <div
            className={`${style["container-header__mainMenu"]} ${style["container-header__menu-bg-gray"]}`}
            style={styleMenuFixed}
        >
            <MenuMovil open={abrirMenu} data={menuMovil?.links} refBtnSearch={refBtnSearch} styled={showFixMenu && { ...styleMenuFixed, maxWidth: "330px" }} />
        </div>
    );


    let imgLogo = (
        <img
            className={style["logo-kbeat"]}
            src={LogoLR}
            alt="Últimas Noticias del Perú y el Mundo en kbeat.pe"
            title="Kbeat"
            width="177"
            height="59"
        />
    );

    if (showFixMenu) {
        styleMenuFixed = {
            position: "fixed",
            top: "80px",
            left: 0,
            right: "0",
        };
    } else {
        styleMenuFixed = {
            top: 0,
            margin: 0,
            left: "0",
            right: "0",
        };
    }
    const showSearchIcon = (
        <div className={style['logo-header-search']}
            onClick={() => {
                setShowSearch(!showSearch);
            }}
        >
            <span aria-hidden="true">
                <svg
                    data-content="menuBuscador"
                    style={{ width: "20px", fill: "#ffffff" }}
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z" />
                </svg>
            </span>
        </div>
    )
    const menuList = [
        {
            title: "K-POP",
            slug:"k-pop"
        },
        {
            title: "K-DRAMAS",
            slug:"k-dramas"
        },
        {
            title: "CINE Y TV",
            slug:"cine-y-tv"
        },
        {
            title: "K-BEAUTY",
            slug:"k-beaty"
        },
        {
            title: "ASIA FAMA",
            slug:"asia-fama"
        },
        {
            title: "SERIES BL",
            slug:"series-bl"
        },
        {
            title: "ESPECIALES BIBIMBAP",
            slug:"especiales-bibimbap"
        },

    ]
    const makeListMenu = menuList.map((item, key) => (
        <li className={style["container-header_menu-secciones-item"]} key={key}>
            <a
                className={style["container-header_menu-secciones-link"]}
                href={`https://larepublica.pe/${item.slug}`}
            >
                {item.title}
            </a>
        </li>
    ))

    return (
        <header id="header" className={style["box-header"]}>
            <SlotAds hideAdTop={hideAdTop} type="Top" data={adsPage?.ads?.data} />
            <div itemScope itemType="http://www.schema.org/SiteNavigationElement" className={style["general__header"]}>
                <TodayTopic data={topicData} styleClass="container-header" />
                <div className="container-header" id="container__header">
                    <div className={style["container-color"]}>
                        <div className={style["container__content"]}>
                            <div className={style["container-btn-main-menu"]}>

                                <button
                                    className={`${style["btn-sandwich"]} ${abrirMenu ? style["activeMenu"] : ""}`}
                                    id="btn-menu-burguer"
                                    role="button"
                                    aria-label="none"
                                    aria-hidden="true"
                                    onClick={openMenuFn}
                                >
                                    <span className={style["btn-sandwich_span"]} />
                                    <span className={style["btn-sandwich_span"]} />
                                    <span className={style["btn-sandwich_span"]} />
                                </button>
                                {!state.showFixMenu && <Networks/>}
                            </div>
                            <div className={style["logo-header-kbeat"]} >
                                <a
                                    href="/"
                                    aria-label="Últimas Noticias del Perú y el Mundo en larepublica.pe"
                                    >
                                    {imgLogo}
                                </a>
                            </div>
                            {showSearchIcon}
                        </div>

                    </div>
                    {internal && showProgressBar && <div className={style["bar"]} ><div className={style["loader"]} style={{ width: `${percentVisible}%`, maxWidth: '100%'}}></div></div>}
                    {showFixMenu && <InputSearch refBtnSearch={refBtnSearch} showSearch={showSearch} />}
                    <div className="list__menu" id="list__menu">
                        {!showFixMenu && <div className={style["container"]}>
                            <ul className={style["container-header_menu-secciones"]}>
                                {makeListMenu}
                            </ul>
                        </div>}
                    </div>
                    <div className={`${style["container_subMenuHeader"]} ${abrirMenu ? style["activeMenuDropdown"] : ""}`}>{showSubMenu}</div>
                    <div className={style["hidden"]} style={{position: 'relative'}}>
                        {menuMovil && menuMovil?.links ? <MenuMovil open={abrirMenu} data={menuMovil?.links} /> : null}
                    </div>
                </div>
            </div>
        </header>
    );
};

export { Header };
